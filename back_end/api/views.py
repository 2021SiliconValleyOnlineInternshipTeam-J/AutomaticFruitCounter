from django.core.files.storage import default_storage
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from api.models import MongoDbManager
import gridfs
import json

@csrf_exempt
def testapi(request):

    if request.method == 'POST':
        try:
            file = request.FILES['image']
        except:
            return HttpResponse(status=400)

        file = request.FILES['image']
        default_storage.save("images" + '/input/' + file.name, file)
        data = {"url": "images" + '/input/' + file.name}
        result = MongoDbManager().add_user_on_collection(data)
        
        """
            이 부분에 Model image 입력하는 코드 작성
        """
        
        return HttpResponse(status=201) if result else HttpResponse(status=500)