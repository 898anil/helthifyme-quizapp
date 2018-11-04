import Post from '../models/quiz';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';
import Answer from '../models/answer';
import Question from '../models/question';


export function createAnswer(req, res) {
  var answer = req.body;
  var questionId = answer.questionId;
  Question.findOne({ questionId }).exec(function(err, question) {
  	if (err) {
  	  return res.status(500).send(err);
  	}
    var correctAnswerId = question.answerId;
    if (answer.answerId === correctAnswerId) {
      answer.isCorrect = true;
    }
    Answer.create(answer,(err, _answer) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ answer })
    })
  })


}
