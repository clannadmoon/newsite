# coding=UTF-8
#!/usr/bin/python
import os
import cv2
for i in range(0,201):
    i = i+1
    pth = "/Users/zhoupeng/Desktop/imgs/png/5联系我们"+str(i)+".png"
    print(pth) 
    image = cv2.imread(pth)      
    cropImg = image[600:1200,750:1500] 
    cv2.imwrite("/Users/zhoupeng/Desktop/imgs/png/"+str(i)+"new.png",cropImg)
# print pth
#cropImg = image[100:200, 100:200]
#cv2.imwrite("a.bmp",cropImg)
