import Question from '../models/question';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


export function createQuestion(req,res){
	var question = req.body;
	Question.create(question).exec((err,question)=>{
		if(err){
			return res.status(500).send(err)
		}
		res.json({question})
	})
}

export function updateQuestion(req,res){
	var questionData = req.body;
	var questionId = req.params.id;
	Question.update({_id:questionId},questionData).exec((err,question)=>{
		if(err){
			return res.status(500).send(err)
		}
		res.json({question})
	})
}

export function deleteQuestion(req,res){
	var questionData = req.body;
	var questionId = req.params.id;
	Question.delete({_id:questionId}).exec((err)=>{
		if(err){
			return res.status(500).send(err)
		}
		res.json({})
	})
}
