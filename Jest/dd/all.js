const axios = require("axios").default;

const methods = {
  a(num1, num2) {
    return num1 + num2;
  },
  b(num1, num2) {
    return num1 ** num2;
  },
  c() {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.data.title);
  },
};

methods.c();

module.exports = methods;
