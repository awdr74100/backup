1. Promise.all() vs Promise.allSettled() 差異 (補充 Promise.all() 與 Promise.race() 存在短路特性) √

   - Promise.all() 與 Promise.race 存在短路運作，錯誤時將直接跳至 catch 塊，Promise.allSettled 無論皆回傳 fulfilled 狀態 (可查看各自狀態)

2. async 函式中使用 throw new Error() vs return Promise.reject() 差異 √

   - 在 async 的被呼叫函式中，回傳 value 與回傳 Promise.resolve() 一樣，throw new Error 與回傳 Promise.reject() 一樣 (自身塊未有 try catch 時，throw new Error 就等同於 return Promise.reject())
   - undefined 是屬於 fulfilled 狀態
   - Promise.resolve() 與 Promise.reject() 可將未有 async 關鍵字的被呼叫函式透過 retrun 使之形成 Promise 物件，通常在 async 可透過傳值或 throw new Error 回傳狀態 (看狀況，是否存在 try catch，在沒有被 catch 的情況)
   - return Promise.reject() 錯誤將由呼叫函式處理，return await Promise.reject() 錯誤將由本身處理 (被呼叫函式)
   - 懶人包：async 函式中，值可以直接回傳，不需要使用 Promise.resolve()，throw new Error 使用在第一層 (表示沒有 try catch 捕捉) 效果等同於 return Promise.reject()，假設存在於 try catch，使用 throw new Error 將被自身 catch 捕捉，可使用 return Promise.reject()，效果如同第一層 throw new Error，達到響應 reject 目的。
   - throw new Error 與 return Promise.reject() 結果基本相同，除了在異步回調 (setTimeout) 上，使用參數的 reject 能夠成功，throw 則會失敗 (未被捕捉 Uncaught)

3. async 函數回傳的是 Promise 物件 √

4. settled 狀態表示的是被解決的 Promise (fulfilled 或 rejected 的統稱) √

5. HTTP 狀態碼對於 Promise 的影響，是屬於 fulfilled 還是 rejected (Fetch 需要使用 res.ok 來判斷，順便使用 axios, validateStatus 屬性) √

   - Fetch 除了 CORS、網路錯誤、找不到主機、沒有連接、伺服器沒有響應為 rejected 狀態外，其他皆為 fulfilled 狀態，包含 4xx、5xx 等響應代碼 (可使用 res.ok 判斷代碼是否為 200 ~ 299 範圍內)
   - Axios 從 validateStatus 屬性判斷是否為 fulfilled 或 rejected (預設 fulfilled 判斷為 status >= 200 && status < 300，注意 null、undefined 是透過值去設置，並不是 function return 方式)

6. Top-level await 執行 (無需使用 IIFE) √

7. throw new Error 與 try catch 的關係 √

   - 使用 try catch 可以捕捉 throw new Error() 的錯誤，未使用時將往上尋找，代表可在呼叫對象使用 try catch 捕捉，直到發生 Uncaught Error
