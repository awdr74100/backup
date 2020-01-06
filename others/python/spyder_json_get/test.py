# -*- coding: utf-8 -*-
"""
Created on Mon Jan  6 14:30:17 2020

@author: a7894
"""

import requests
import re
import json
from bs4 import BeautifulSoup
res=requests.get("https://www.stust.edu.tw/WebService/newspaper2.aspx?callback=jQuery1101045361847074608774_1576114425612&_=1576114425613")
m=re.search('(\[\{.*\}\])', res.text )
jsonData = json.loads(m.group(1))
print(jsonData)
# jsonData = [ {},{},{} ]
for i in jsonData:
    print(i['stime'])
    print(i['a_title'])
    print(BeautifulSoup(i['content'],'html.parser').select('span')[0].text + '\n')
    # or
    #print(BeautifulSoup(i['content']).text)
