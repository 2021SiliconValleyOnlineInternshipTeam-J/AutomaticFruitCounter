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
        file.name = "test.jpg"
        default_storage.save("images" + '/' + file.name, file)
        fruitData = {"id": 1, "file_name": "test" + '/' + file.name}
        result = MongoDbManager().add_user_on_collection(fruitData)
        return HttpResponse(status=201)