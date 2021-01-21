# from django.shortcuts import render
# from django.http import HttpResponse, JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Addresses
# from .serializers import AddressesSerializer
# from rest_framework.parsers import JSONParser
# from django.contrib.auth.models import User
# from django.contrib.auth import authenticate
# import json
#
#
# # Create your views here.
# @csrf_exempt
# def address_list(request):
#     if request.method == 'GET':
#         query_set = Addresses.objects.all()
#         serializer = AddressesSerializer(query_set, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = AddressesSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
#
#
# @csrf_exempt
# def address(request, pk):
#     obj = Addresses.objects.get(pk=pk)
#
#     if request.method == 'GET':
#         serializer = AddressesSerializer(obj)
#         return JsonResponse(serializer.data, safe=False)
#
#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = AddressesSerializer(obj, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         return JsonResponse(serializer.errors, status=400)
#
#     elif request.method == 'DELETE':
#         obj.delete()
#         return HttpResponse(status=204)
#
#
# @csrf_exempt
# def login(request):
#     if request.method == 'POST':
#         print("리퀘스트 로그" + str(request.body))
#         id = request.POST.get('userid', '')
#         pw = request.POST.get('userpw', '')
#         print("id = " + id + " pw = " + pw)
#
#         result = authenticate(username=id, password=pw)
#
#         if result:
#             print("로그인 성공!")
#             return HttpResponse(status=200)
#         else:
#             print("실패")
#             return HttpResponse(status=401)
#
#     return render(request, 'addresses/login.html')
#
#
# @csrf_exempt
# def app_login(request):
#     if request.method == 'POST':
#         print("리퀘스트 로그" + str(request.body))
#         id = request.POST.get('userid', '')
#         pw = request.POST.get('userpw', '')
#         print("id = " + id + " pw = " + pw)
#
#         result = authenticate(username=id, password=pw)
#
#         if result:
#             print("로그인 성공!")
#             return JsonResponse({'code': '0000', 'msg': '로그인성공입니다.'}, status=200)
#         else:
#             print("실패")
#             return JsonResponse({'code': '1001', 'msg': '로그인실패입니다.'}, status=200)
#
#
# @csrf_exempt
# def chat_service(request):
#     if request.method == 'POST':
#         input1 = request.POST['input1']
#         print(input1)
#         output = dict()
#         output['response'] = "이건 응답"
#         return HttpResponse(json.dumps(output), status=200)
#     else:
#         return render(request, 'addresses/chat_t:wqest.html')
#

from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from api.models import MongoDbManager
import json


def specific_user(request, username):

    if request.method == 'GET':
        dbUserData = MongoDbManager().get_users_from_collection({'name': username})
        responseData = dbUserData[0]
        del responseData['_id']

        return HttpResponse(json.dumps(responseData), status=200)

    elif request.method == 'POST':
        try:
            age, job = request.POST['age'], request.POST['job']
        except:
            return HttpResponse(status=400)

        userData = {
            'name': username,
            'age': age,
            'job': job
        }

        result = MongoDbManager().add_user_on_collection(userData)
        return HttpResponse(status=201) if result else HttpResponse(status=500)

    elif request.method == 'DELETE':
        return HttpResponse(status=204)

    else:
        return HttpResponse(status=405)


def all_users(request):
    if request.method == 'GET':
        dbUserData = MongoDbManager().get_users_from_collection({})
        responseData = []
        for user in dbUserData:
            del user['_id']
            responseData.append(user)

        return HttpResponse(json.dumps(responseData), status=200)

    else:
        return HttpResponse(status=405)


########################################################################
def add(request):
    return HttpResponse("ㅎㅇ", status=200)


@csrf_exempt
def testapi(request):

    if request.method == 'POST':
        try:
            print("오긴 옴")
            data = json.loads(request.body)
        except:
            return HttpResponse(status=400)

        fruitData = {
            'fruit' : "사과",
            'name': data['name'],
        }

        result = MongoDbManager().add_user_on_collection(fruitData)
        return HttpResponse(status=201) if result else HttpResponse(status=500)

    elif request.method == 'DELETE':
        return HttpResponse(status=204)

    else:
        return HttpResponse(status=405)