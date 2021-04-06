## 說明文件

它端可用於測試 Socket.IO 是否正常運作

- Java: https://github.com/socketio/socket.io-client-java
- C++: https://github.com/socketio/socket.io-client-cpp
- Python: https://github.com/miguelgrinberg/python-socketio

```plain
BASE_URL = http://localhost:4000
```

- 每 3 秒自動推播訊息，它端需透過 on 監聽 open_door 事件
- Socket.IO 可綁定自訂 on 事件，它端可透過 emit 發射至 test 事件
- 它端需透過 on 監聽 callback 事件藉此判斷是否進行操作 (此為 test 響應)

### 啟動

```ps
$ npm run i
$ npm run dev
```

### 測試

```ps
$ npm run test
```
