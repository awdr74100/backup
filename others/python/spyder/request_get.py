import requests

res = requests.get("https://www.stust.edu.tw/")
print(res.text)