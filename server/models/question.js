const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionsSchema = new Schema({
	id:{ type: 'String', required: true },
	answer:{ type: 'String', required: true }
})

const questionSchema = new Schema({
  title: { type: 'String', required: true },
  description: { type: 'String', required: false },
  options: [optionsSchema],
  correctAnswerId:{ type: 'String', required: true },
  createdAt: { type: 'Date', default: Date.now, required: true },
});

module.exports =  mongoose.model('Question', questionSchema);
