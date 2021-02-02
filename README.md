# Fruit Billing

-   Automatic fruit counter is web projects that classify and automatically calculate fruits.

## 🍌Index
> <b><a href="#front_end">🍒front_end</a></b>  
> <b><a href="#contributors">🍒Contributors</a></b>  
> <b><a href="#language">🍒Language</a></b>  


## 🍒Front_end
### 🍍Design
  > [🖍Design Document](https://www.notion.so/984e7c8ddc0a4cd1875fa445a0039524)    
  
### 🍍Structure
  > 🍏 [font_end/src/pages](./front_end/src/pages) : Directory for pages  
  > 🍏 [front_end/src/pages/components](./front_end/src/pages/components) : Directory for components used on multiple pages  
  > 🍏 [front_end/src/pages/logo](./front_end/src/pages/logo) : Directory for logos

<div align="right">
    <b><a href="#fruit-billing">⬆️ Back to Top</a></b>
</div>


## 🍒Back_end
### 🍍Architecture

  
### 🍍Object Detection Model
  > 🍏 [YOLOv5](https://pytorch.org/hub/ultralytics_yolov5/)  
  > 🍏 [YOLOv5 github](https://github.com/ultralytics/yolov5)  
  > 🍏 [DataSet](https://public.roboflow.com/object-detection/synthetic-fruit/)
  : 6,000 images / 63 classes / 16,830 annotations
  ![Train/Test Split](https://user-images.githubusercontent.com/33440010/106569267-a5140b80-6577-11eb-8731-30d9504f0fab.png)
  ![Class Balance](https://user-images.githubusercontent.com/33440010/106569786-55820f80-6578-11eb-8996-f8b72652b2f1.png)  

  > 🍏 [Training result](https://wandb.ai/mj-kim/YOLOv5?workspace=user-mj-kim)  
  | metrics/precision | metrics/mAP_0.5 |
  | :---------------: | :-------------: |
  | ![metrics/precision](https://user-images.githubusercontent.com/33440010/106571339-62076780-657a-11eb-9e89-8c6f19a18a43.png) | ![metrics/mAP_0.5](https://user-images.githubusercontent.com/33440010/106571354-65025800-657a-11eb-9d32-979ffb23f6dd.png) | 
  | metrics/mAP_0.5:0.95 | metrics/recall |
  | ![metrics/mAP_0.5:0.95](https://user-images.githubusercontent.com/33440010/106571345-63d12b00-657a-11eb-8af9-953a01c8c4a6.png) | ![metrics/recall](https://user-images.githubusercontent.com/33440010/106571358-66338500-657a-11eb-9a23-e640ba750245.png) |

  |     | obj_loss | box_loss | cls_loss |
  | :-: | :------: | :------: | :------: |
  | Train | ![train/obj_loss](https://user-images.githubusercontent.com/33440010/106573037-7ea49f00-657c-11eb-9f04-b0fd05518798.png) | ![train/box_loss](https://user-images.githubusercontent.com/33440010/106573039-7f3d3580-657c-11eb-8cb3-8a630150289c.png) | ![train/cls_loss](https://user-images.githubusercontent.com/33440010/106573034-7e0c0880-657c-11eb-96a1-0a293bf776a3.png) |
  | Validation | ![val/obj_loss](https://user-images.githubusercontent.com/33440010/106573042-7fd5cc00-657c-11eb-883d-4de786377699.png) | ![val/box_loss](https://user-images.githubusercontent.com/33440010/106573043-806e6280-657c-11eb-8f68-a74f58fe267a.png) | ![val/cls_loss](https://user-images.githubusercontent.com/33440010/106573040-7f3d3580-657c-11eb-8846-fea9dce2e1b6.png) |

  base model : YOLOv5s
  ![image](https://api.wandb.ai/files/mj-kim/YOLOv5/p9ges2w3/media/images/Results_3904_0.png)
  base model : YOLOv5m
  ![image](https://api.wandb.ai/files/mj-kim/YOLOv5/2zf535rq/media/images/Results_3904_0.png)  


<div align="right">
    <b><a href="#fruit-billing">⬆️ Back to Top</a></b>
</div>


## 🍒Contributors
| Name | Country | Where to find you | Role |
| ---- | ------- | ----------------- | ---- |
| MinJae Kim <br /> <img src="https://avatars.githubusercontent.com/u/33440010?s=460&u=0b6b72d249309eb95a88afa55a1f954f447a88b7&v=4" width="100" />  | Republic Of Korea | [Github](https://github.com/minjae9610)| Back End |
| Chunghwan Kim <br /> <img src="https://avatars.githubusercontent.com/u/49121847?s=460&v=4" width="100" />  | Republic Of Korea | [Github](https://github.com/CH0213)| Back End |
| Chaeyeon Song <br /> <img src="https://avatars.githubusercontent.com/u/76681062?s=460&v=4" width="100" />  | Republic Of Korea | [Github](https://github.com/codus503)| Front End |
| SiEun Lee <br /> <img src="https://avatars.githubusercontent.com/u/55918978?s=460&v=4" width="100" />  | Republic Of Korea | [Github](https://github.com/LeeSiEun-0107)| Front End |
| Dahyeon Jeong <br /> <img src="https://avatars.githubusercontent.com/u/77030528?s=460&v=4" width="100" />  | Republic Of Korea | [Github](https://github.com/DahyeonJeong)| Front End |

<div align="right">
    <b><a href="#fruit-billing">⬆️ Back to Top</a></b>
</div>


## 🍒Language

<div align="right">
    <b><a href="#fruit-billing">⬆️ Back to Top</a></b>
</div>


## [](https://github.com/shpark76/docker-demo#docker-prerequisites)Docker Prerequisites:

-   Windows [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)
-   Mac [https://docs.docker.com/docker-for-mac/install/](https://docs.docker.com/docker-for-mac/install/)

### [](https://github.com/shpark76/docker-demo#1-git-clone)1\. git clone

```
git clone https://github.com/2021SiliconValleyOnlineInternshipTeam-J/FruitBilling.git
```

### [](https://github.com/shpark76/docker-demo#2-docker-compose-build-and-up)2\. docker compose build

```
docker-compose build
```

### 3\. docker compose up

```
docker-compose up
```
