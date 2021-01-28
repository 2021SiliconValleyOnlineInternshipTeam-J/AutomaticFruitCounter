import pickle
import cv2
import numpy as np
import torch


# 상품 가격 정보 관리
class Bill:
    def __init__(self, price_path):
        self.__price_path = price_path
        with open(self.__price_path, "rb") as f:
            self.__price = pickle.load(f)

    # 단일 상품 가격 반환, 등록이 안된 상품의 경우 False 반환
    def get_price(self, item):
        return self.__price[item] if item in self.__price else False

    # 등록된 전체 상품 가격 반환
    def get_prices(self):
        return self.__price

    # 상품 가격 설정
    def set_price(self, item, price):
        self.__price[item] = price
        self.save_price()

    # 등록된 상품 삭제
    def del_product(self, item):
        if item in self.__price:
            del(self.__price[item])
        self.save_price()

    # 상품 가격 dic을 바이너리 파일로 저장
    def save_price(self):
        with open(self.__price_path, "wb") as f:
            pickle.dump(self.__price, f)

    # items 에 상품 가격 정보 추가
    def add_price_info(self, items):
        for key in items.keys():
            items[key] = [items[key], self.get_price(key)]



# 이미지에서 객체 검출
class YOLO:
    def __init__(self, weights_path):
        self.__model = torch.hub.load('ultralytics/yolov5', 'custom', path_or_model=weights_path)

    # 객체 검출 결과 이미지와 검출된 객체 갯수를 dic으로 반환
    def detect(self, frame):
        # 입력 이미지 전처리
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        # 모델 사용
        __result = self.__model(frame)
        # 결과 이미지 후처리
        frame = cv2.cvtColor(__result.imgs[0], cv2.COLOR_RGB2BGR)

        items = {}
        __pred = __result.pred[0].tolist()
        __colors = np.random.uniform(0, 255, size=(len(__result.names), 3))
        
        for item in __pred:
            __x1, __y1, __x2, __y2 = item[0:4]
            __center_x = int(((__x1 + __x2) / 2) + 0.5)
            __center_y = int(((__y1 + __y2) / 2) + 0.5)
            __radius = int(max((__x2 - __x1), (__y2 - __y1)) / 2 + 0.5)
            __class_name = __result.names[int(item[-1])]
            items[__class_name] = items[__class_name] + 1 if __class_name in items else 1

            __label = f"{__class_name} {item[-2]:.2f}"
            __color = __colors[int(item[-1])]

            # 네모
            # cv2.rectangle(frame, (__x1, __y1), (__x2, __y2), __color, 2)
            # cv2.rectangle(frame, (__x1 - 1, __y1), (__x1 + len(__class_name) * 13 + 65, __y1 - 25), __color, -1)
            # cv2.putText(frame, __label, (__x1, __y1 - 8), cv2.FONT_HERSHEY_COMPLEX_SMALL, 1, (0, 0, 0), 2)

            # 원
            cv2.circle(frame, (__center_x, __center_y), __radius, __color, 3)

        return frame, items