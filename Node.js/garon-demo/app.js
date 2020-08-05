const argon2 = require("argon2");

const password = "123";

(async () => {
  const hash = await argon2.hash(password, {
    type: argon2.argon2id,
  });
  console.log(hash);
  const result = await argon2.verify(hash, password);
  console.log(result);
  console.log(
    await argon2.verify(
      "$argon2id$v=12$m=4096,t=3,p=1$bZIl7XNR/J5ezU8o4Yl3qg$UOJTJMNRxvPDS8IoA94XY+9ZDGJVCVJzS4gDjw6a8hs",
      password
    )
  );
})();
