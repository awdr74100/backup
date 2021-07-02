const { Router } = require('express');

const router = Router();

const delay = () => new Promise((resolve) => setTimeout(resolve, 10));

router.post('/check', async (req, res) => {
  const { statusCode } = req.body;
  await delay();
  res.status(statusCode).send({ title: 'RESTful Check', statusCode });
});

module.exports = router;
