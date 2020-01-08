import requests
from bs4 import BeautifulSoup

payload = {
    'from':'/bbs/Gossiping/index.html',
    'yes':'yes'
}

res = requests.session()
res2 = res.post('https://www.ptt.cc/ask/over18',data=payload)
soup = BeautifulSoup(res2.text)

for i in soup.select('.r-ent'):
    print(i.select('.title')[0].text)
    print(i.select('.meta .author')[0].text)
    print(i.select('.meta .date')[0].text)
