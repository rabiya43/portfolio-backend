const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  const data = await Education.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newEdu = new Education(req.body);
  const saved = await newEdu.save();
  res.status(201).json(saved);
});

router.get('/:id', async (req, res) => {
  const item = await Education.findById(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;