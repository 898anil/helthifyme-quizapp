import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const answerSchema = new Schema({
	quizId:{ type: 'String', required: true },
	questionId:{ type: 'String', required: true },
	answerText:{ type: 'String', required: true },
	answerId:{ type: 'String', required: true },
	userId:{ type: 'String', required: true },
	isCorrect:{ type: 'Boolean', required: true },
	createdAt: { type: 'Date', default: Date.now, required: true }
})

export default mongoose.model('Answer', answerSchema);
