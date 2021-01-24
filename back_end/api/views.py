from django.core.files.storage import default_storage
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from api.models import MongoDbManager
# from api.detect import YOLO
# from api.detect import Bill
import gridfs
import json
import datetime

@csrf_exempt
def testapi(request):

    if request.method == 'POST':
        try:
            file = request.FILES['image']
        except:
            return HttpResponse(status=400)

        file = request.FILES['image']
        now = datetime.datetime.now()
        default_storage.save("images" + '/input/' + now.strftime('%Y_%m_%d_%H_') + file.name, file)
        data = {"url": "images" + '/input/' + now.strftime('%Y_%m_%d_%H_') + file.name}
        result = MongoDbManager().add_user_on_collection(data)
        
        """
            이 부분에 Model image 입력하는 코드 작성
        """
        
        return HttpResponse(status=201) if result else HttpResponse(status=500)