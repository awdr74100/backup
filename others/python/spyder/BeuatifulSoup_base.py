import requests
from bs4 import BeautifulSoup

res = requests.get('https://www.stust.edu.tw/')
# print(res.text)
soup = BeautifulSoup(res.text)
# print(soup)
for i in soup.select(".Menu a"):
    print(i.text)
    print(i['href'] + '\n')