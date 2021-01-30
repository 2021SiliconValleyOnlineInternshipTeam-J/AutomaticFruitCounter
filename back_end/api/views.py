from django.core.files.storage import default_storage
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from .models import MongoDbManager
import gridfs
import json
import datetime
import cv2
import os
import base64

@csrf_exempt
def testapi(request):

    if request.method == 'POST':
        try:
            file = request.FILES['image']
        except:
            return HttpResponse(status=400)

        file = request.FILES['image']
        now = datetime.datetime.now()
        file_name = now.strftime('%Y_%m_%d_%H_') + file.name
        default_storage.save("images" + '/input/' + file_name, file)
        data = {"url": "images" + '/input/' + now.strftime('%Y_%m_%d_%H_') + file_name}
        result = MongoDbManager().add_user_on_collection(data)

        os.chdir("/app/api")
        src = cv2.imread(settings.SRC_PATH + file_name)

        frame, items = settings.MODEL.detect(src)
        cv2.imwrite(settings.OUTPUT_PATH + file_name, frame)
        settings.BILL.add_price_info(items)
        
        with open(settings.OUTPUT_PATH + file_name, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read())
        items['url'] = encoded_string.decode("UTF-8")
        return JsonResponse(json.dumps(items), safe=False) if result else HttpResponse(status=500)