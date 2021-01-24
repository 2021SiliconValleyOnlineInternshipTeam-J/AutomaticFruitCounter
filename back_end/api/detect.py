# import cv2
# import pickle
# import numpy as np
#
#
# # 상품 가격 정보 관리
# class Bill:
#     def __init__(self, price_path):
#         self.__price_path = price_path
#         with open(self.__price_path, "rb") as f:
#             self.__price = pickle.load(f)
#
#     # 단일 상품 가격 반환, 등록이 안된 상품의 경우 False 반환
#     def get_price(self, item):
#         return self.__price[item] if item in self.__price else False
#
#     # 등록된 전체 상품 가격 반환
#     def get_prices(self):
#         return self.__price
#
#     # 상품 가격 설정
#     def set_price(self, item, price):
#         self.__price[item] = price
#         self.save_price()
#
#     # 등록된 상품 삭제
#     def del_product(self, item):
#         if item in self.__price:
#             del(self.__price[item])
#         self.save_price()
#
#     # 상품 가격 dic을 바이너리 파일로 저장
#     def save_price(self):
#         with open(self.__price_path, "wb") as f:
#             pickle.dump(self.__price, f)
#
#
# # 이미지에서 객체 검출
# class YOLO:
#     def __init__(self, weights_path, cfg_path, names_path):
#         with open(names_path, "r") as f:
#             self.__classes = [line.strip() for line in f.readlines()]
#         self.__net = cv2.dnn.readNet(weights_path, cfg_path)
#         self.__layer_names = self.__net.getLayerNames()
#         self.__output_layers = [self.__layer_names[i[0] - 1] for i in self.__net.getUnconnectedOutLayers()]
#         self.__colors = np.random.uniform(0, 255, size=(len(self.__classes), 3))
#
#     # 객체 검출 결과 이미지와 검출된 객체 갯수를 dic으로 반환
#     def detect(self, frame, size, score_threshold, nms_threshold):
#         height, width, channels = frame.shape
#         blob = cv2.dnn.blobFromImage(frame, 0.00392, (size, size), (0, 0, 0), True, crop=False)
#         self.__net.setInput(blob)
#
#         outs = self.__net.forward(self.__output_layers)
#
#         class_ids = []
#         confidences = []
#         boxes = []
#         items = {}
#
#         for out in outs:
#             for detection in out:
#                 scores = detection[5:]
#                 class_id = np.argmax(scores)
#                 confidence = scores[class_id]
#
#                 if confidence > 0.1:
#                     center_x = int(detection[0] * width)
#                     center_y = int(detection[1] * height)
#                     w = int(detection[2] * width)
#                     h = int(detection[3] * height)
#
#                     x = int(center_x - w / 2)
#                     y = int(center_y - h / 2)
#
#                     boxes.append([x, y, w, h])
#                     confidences.append(float(confidence))
#                     class_ids.append(class_id)
#
#         indexes = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=score_threshold, nms_threshold=nms_threshold)
#
#         # # log
#         # print(f"boxes: {boxes}")
#         # print(f"confidences: {confidences}")
#         # print(f"indexes: ", end='')
#         # for index in indexes:
#         #     print(index, end=' ')
#
#         for i in range(len(boxes)):
#             if i in indexes:
#                 x, y, w, h = boxes[i]
#                 class_name = self.__classes[class_ids[i]]
#                 items[class_name] = items[class_name] + 1 if class_name in items else 1
#
#                 label = f"{class_name} {confidences[i]:.2f}"
#                 color = self.__colors[class_ids[i]]
#
#                 cv2.rectangle(frame, (x, y), (x + w, y + h), color, 2)
#                 cv2.rectangle(frame, (x - 1, y), (x + len(class_name) * 13 + 65, y - 25), color, -1)
#                 cv2.putText(frame, label, (x, y - 8), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (0, 0, 0), 2)
#
#         return frame, items
#
#
# if __name__ == "__main__":
#     WEIGHTS_PATH = "bin/fruit.weights"
#     CFG_PATH = "bin/fruit.cfg"
#     NAMES_PATH = "bin/fruit.names"
#     SRC_PATH = "images/Input_fruit.jpg"
#     PRICE_PATH = "bin/fruit.bill"
#
#     # 학습 사이즈 = 608
#     size_list = [320, 416, 608]
#     SIZE = size_list[2]
#     SCORE_THRESHOLD = 0.1
#     NMS_THRESHOLD = 0.4
#
#     src = cv2.imread(SRC_PATH)
#
#     # 이미지 객체 검출
#     model = YOLO(WEIGHTS_PATH, CFG_PATH, NAMES_PATH)
#     frame, items = model.detect(frame=src, size=SIZE, score_threshold=SCORE_THRESHOLD, nms_threshold=NMS_THRESHOLD)
#
#     # 상품 가격 정보 출력
#     # 상품명 상품갯수 상품가격 상품총가격
#     bill = Bill(PRICE_PATH)
#     for item in items:
#         print(item, items[item], bill.get_price(item), items[item] * bill.get_price(item))
#
#     cv2.imwrite("./images/Output_fruit.jpg", frame)
