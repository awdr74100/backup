import requests
from bs4 import BeautifulSoup
import shutil
res = requests.get("https://www.gamebase.com.tw/forum/38033/topic/97494527/1#1460716494")
soup = BeautifulSoup(res.text)
#print(soup.select(".img"))
for img in soup.select(".img"):
    # print(img['src'])    
    fname = 'C:\\Users\\a7894\\Desktop\\demo\\img\\' + img['src'].split('/')[-1]
    # print(fname)
    res2 = requests.get(img['src'], stream = True)
    f = open(fname, "wb")
    shutil.copyfileobj(res2.raw, f)
    f.close()