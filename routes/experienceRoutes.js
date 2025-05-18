const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
  const data = await Experience.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newExp = new Experience(req.body);
  const saved = await newExp.save();
  res.status(201).json(saved);
});

router.get('/:id', async (req, res) => {
  const item = await Experience.findById(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const updated = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
