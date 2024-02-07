const express = require("express");
const router = express.Router();
const Joi = require("joi");
const services = require("./services");

router.get("/posts", (req, res) => {
  req.query.author;
  // TODO get posts
  res.status(200).json(posts);
});

// post schema
const postSchema = Joi.object({
  title: Joi.string().min(5).required(),
  content: Joi.string().min(10).required(),
  date: Joi.date(),
  tags: Joi.array().items(Joi.string()),
});

router.post("/posts", (req, res) => {
  const { error, value } = postSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details);
  }

  const created = services.create(value);

  res.status(201).json(created);
});

module.exports = router;
