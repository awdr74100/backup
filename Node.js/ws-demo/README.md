## 說明文件

它端可用於測試 Native WebSocket 是否正常運作

```plain
BASE_URL = http://localhost:3000
```

- 每 3 秒自動推播訊息，它端須將字串解析成物件供使用
- Native WebSocket 無法綁定自訂 on 事件，它端可透過物件內的 type 屬性判斷是否進行操作

### 啟動

```ps
$ npm run i
$ npm run dev
```

### 測試

```ps
$ npm run test
```
