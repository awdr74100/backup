const app = require("express")();
const bodyParser = require("body-parser");
const Joi = require("joi");

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const schema = Joi.object({
  username: Joi.string().alphanum().min(6).max(14).required(),
  // email: Joi.string().email().required(),
  // password: Joi.string().alphanum().min(6).max(14).required(),
  // stock: Joi.number().min(0).required(),
});

app.post("/", async (req, res) => {
  const reqBody = schema.validate(req.body);
  console.log(reqBody);
  res.send({ success: true });
  // try {
  //   const reqBody = await schema.validateAsync(req.body);
  //   console.log('success active');
  //   console.log(reqBody);
  //   res.send({ success: true });
  // } catch (error) {
  //   console.log("error active");
  //   // console.log(error.name);
  //   console.dir(error);
  //   res.send({ error: error.message });
  // }
});

app.listen(port, () => console.log(`start localhost ${port}`));
