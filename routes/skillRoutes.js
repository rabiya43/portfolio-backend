const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');

router.get('/', async (req, res) => {
  const data = await Skill.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const newSkill = new Skill(req.body);
  const saved = await newSkill.save();
  res.status(201).json(saved);
});

router.get('/:id', async (req, res) => {
  const item = await Skill.findById(req.params.id);
  res.json(item);
});

router.put('/:id', async (req, res) => {
  const updated = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
