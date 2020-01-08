import requests
from bs4 import BeautifulSoup
import shutil

count = 10
def get_url_image(url,save_dir):
    res = requests.get(url)
    soup = BeautifulSoup(res.text,features="html.parser")
    for img in soup.select(".img"):
        # print(img['src'])    
        fname = save_dir + img['src'].split('/')[-1]
        print(fname)
        res2 = requests.get(img['src'], stream = True)
        f = open(fname, "wb")
        shutil.copyfileobj(res2.raw, f)
        f.close()

if __name__ == '__main__':
    get_url_image("https://www.gamebase.com.tw/forum/38033/topic/97494527/1#1460716494",'C:\\Users\\a7894\\Desktop\\spyder\\QT\\img\\')