const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newProj = new Project(req.body);
  const saved = await newProj.save();
  res.status(201).json(saved);
});

router.get('/:id', async (req, res) => {
  const item = await Project.findById(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;