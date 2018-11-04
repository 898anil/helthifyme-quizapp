import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const quizSchema = new Schema({
	createdAt: { type: 'Date', default: Date.now, required: true },
})

export default mongoose.model('Quiz', quizSchema);
