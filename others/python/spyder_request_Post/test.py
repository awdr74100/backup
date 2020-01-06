import requests
from bs4 import BeautifulSoup
payload = {
    "from": "/bbs/Gossiping/index.html",
    "yes": "yes"
}
rs = requests.session()
rs.post("https://www.ptt.cc/ask/over18", data = payload )
# 以下使用 re 操作 request 都會保持 session 參數
rs = rs.get("https://www.ptt.cc/bbs/Gossiping/index.html")
soup=BeautifulSoup(rs.text)
for entry in soup.select(".r-ent"):
    print(entry.select(".title")[0].text)
    print(entry.select(".author")[0].text)
    print(entry.select(".date")[0].text)