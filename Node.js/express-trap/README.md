- 從堆疊開始向後尋找同類中間件，接著往上一層同樣方式尋找同類中間件：

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

app.post(
  "/api/check",
  m1,
  m2,
  m3,
  (req, res, next) => {
    console.log("App Router Active 1");
    next();
  },
  m3
);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

/**
 * App Middleware Active 1
   App Middleware Active 2
   App Middleware Active 3
   App Router Active 1
   App Middleware Active 3
   App Middleware Active 4
 */
```

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.post(
  "/api/check",
  m1,
  m2,
  m3,
  (req, res, next) => {
    console.log("App Router Active 1");
    throw new Error("Go");
  },
  m3,
  e2
);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Middleware Active 3
   App Router Active 1
   App Error Middleware Active 2
   App Error Middleware Active 1
*/
```

- 中間件使用 throw new Error("...") 或 next(new Error("...")) 可以跳至錯誤中間件：

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  throw new Error("Some Problems");
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

app.post(
  "/api/check",
  m1,
  m2,
  m3,
  (req, res, next) => {
    console.log("App Router Active 1");
    throw new Error("Go");
  },
  m3
);

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Error Middleware Active 1
*/
```

- app.METHOD 或 router.METHOD 可使用 next("route") 跳過堆疊：

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next("route");
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

app.use(m1, m2, m3);

app.post(
  "/api/check",
  m1,
  m2,
  m3,
  (req, res, next) => {
    console.log("App Router Active 1");
    res.send({ title: "App Router Active 1" });
  },
  m3
);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Middleware Active 3
   App Middleware Active 1
   App Middleware Active 2
   App Middleware Active 4
*/
```

- app.use 未指定路徑時將參考根路徑：

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next(new Error("Go"));
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.use(m1, m2, m3, e2);

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Error Middleware Active 2
   App Error Middleware Active 1
*/
```

- app.use 指定路徑時，只在乎第一節路徑是否匹配：

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

app.use("/api", m1, m2, m3);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Middleware Active 3
   App Middleware Active 4
*/
```

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  throw new Error("Go");
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.use(m1, m2);

app.use("/api", m1, m2, routes, m3, e2);

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   App Error Middleware Active 2
   App Error Middleware Active 1
*/
```

- router 同樣將從同層開始尋找同類中間件，接著往上尋找同類中間件

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

app.use("/api", m1, m2, routes);

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

// ./routes/index.js

router.post("/check", (req, res, next) => {
  console.log("Inner Router Active 1");
  throw new Error("Go");
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   Inner Router Active 1
   App Error Middleware Active 1
*/
```

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.use("/api", m1, m2, routes, m3, e2);

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

// routes/index.js

router.post(
  "/check",
  (req, res, next) => {
    console.log("Inner Router Active 1");
    throw new Error("Go");
  },
  (err, req, res, next) => {
    console.log("Inner Error Middleware Active 1");
    return next(err);
  }
);

router.use((err, req, res, next) => {
  console.log("Inner Error Middleware Active 2");
  return next(err);
});

/** 
 * App Middleware Active 1
   App Middleware Active 2
   Inner Router Active 1
   Inner Error Middleware Active 1
   Inner Error Middleware Active 2
   App Error Middleware Active 2
   App Error Middleware Active 1
*/
```

```js
const m1 = (req, res, next) => {
  console.log("App Middleware Active 1");
  next();
};

const m2 = (req, res, next) => {
  console.log("App Middleware Active 2");
  next();
};

const m3 = (req, res, next) => {
  console.log("App Middleware Active 3");
  next();
};

const e2 = (err, req, res, next) => {
  console.log("App Error Middleware Active 2");
  return next(err);
};

app.use("/api", m1, m2, routes, m3, e2);

app.use((req, res, next) => {
  console.log("App Middleware Active 4");
  res.send({ title: "App Middleware Active 4" });
});

app.use((err, req, res, next) => {
  console.log("App Error Middleware Active 1");
  res.status(500).send({ title: err.message });
});

// routes/index.js

router.use((req, res, next) => {
  console.log("Inner Middleware Active 1");
  next();
});

router.post(
  "/check",
  (req, res, next) => {
    console.log("Inner Router Active 1");
    next();
  },
  (req, res, next) => {
    console.log("Inner Router Active 2");
    next();
  }
);

/** 
 * App Middleware Active 1
   App Middleware Active 2
   Inner Middleware Active 1
   Inner Router Active 1
   Inner Router Active 2
   App Middleware Active 3
   App Middleware Active 4
*/
```
