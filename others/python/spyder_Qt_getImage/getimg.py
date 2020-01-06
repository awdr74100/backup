# -*- coding: utf-8 -*-
"""
Created on Mon Jan  6 13:24:03 2020

@author: a7894
"""

from bs4 import BeautifulSoup
import requests
import shutil

def getImage(url,save_dir):
    res = requests.get(url)             
    soup = BeautifulSoup(res.text)
    for img in soup.select(".img"):
        fname = img['src'].split('/')[-1]
        fname = save_dir + fname
        print(fname)
        res2 = requests.get(img["src"],stream = True)
        f = open(fname,'wb')
        shutil.copyfileobj(res2.raw,f)
        f.close()
        
if __name__ == '__main__':
    getImage('https://www.gamebase.com.tw/forum/38033/topic/97494527/1#1460716494','C:\\Users\\a7894\\Desktop\\spyder\\img\\')