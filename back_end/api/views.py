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

@csrf_exempt
def testapi(request):

    if request.method == 'POST':
        """
        try:
            print("오긴 옴")
            data = json.loads(request.body)
        except:
            return HttpResponse(status=400)

        fruitData = {
            'fruit' : "사과",
            'name': data['name'],
        }

        result = MongoDbManager().add_user_on_collection(fruitData)"""
        file = request.FILES['image']
        file.name = "test.jpg"
        default_storage.save("images" + '/' + file.name, file)
        fruitData = {"id": 1, "file_name": "test" + '/' + file.name}
        result = MongoDbManager().add_user_on_collection(fruitData)
        return HttpResponse(status=201)