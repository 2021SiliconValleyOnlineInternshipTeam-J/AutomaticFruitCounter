from django.core.files.storage import default_storage
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from .models import MongoDbManager
from .detect import YOLO
from .detect import Bill
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

        """
            이 부분에 Model image 입력하는 코드 작성
        """
        WEIGHTS_PATH = "bin/fruit.weights"
        CFG_PATH = "bin/fruit.cfg"
        NAMES_PATH = "bin/fruit.names"
        SRC_PATH = "../images/input/"
        PRICE_PATH = "bin/fruit.bill"
        OUTPUT_PATH = "../images/output/output_"

        size_list = [320, 416, 608]
        SIZE = size_list[2]
        SCORE_THRESHOLD = 0.1
        NMS_THRESHOLD = 0.4

        os.chdir("/app/api")
        src = cv2.imread(SRC_PATH + file_name)

        model = YOLO(WEIGHTS_PATH, CFG_PATH, NAMES_PATH)
        frame, items = model.detect(frame=src, size=SIZE, score_threshold=SCORE_THRESHOLD, nms_threshold=NMS_THRESHOLD)
        cv2.imwrite(OUTPUT_PATH + file_name, frame)
        with open(OUTPUT_PATH + file_name, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read())
        items['url'] = encoded_string.decode("UTF-8")
        return JsonResponse(json.dumps(items), safe=False) if result else HttpResponse(status=500)