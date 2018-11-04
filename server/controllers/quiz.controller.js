import Quiz from '../models/quiz';
import Answer from '../models/answer';
import Question from '../models/question';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';


export function getQuiz(req, res) {
  Quiz.create({},(err, quiz) => {
    if (err) {
      res.status(500).send(err);
    }
    var questions;
    Answer.find({userId:"11111"}).sort("-createdAt").limit(1).exec((err,answer)=>{
      if (err) {
        return res.status(500).send(err);
      }
      var questionQuery;
      if(answer){
        var lastAnswerDate = answer.createdAt;
        questionQuery = {createdDate:{$gte:lastAnswerDate}};
      }
      else
      {
        questionQuery = {};
      }
      Question.find(questionQuery).limit(10).exec((err,questions)=>{
        if (err) {
          return res.status(500).send(err);
        }
        questions = questions;
        var newQuiz = {
          quizId:quiz._id,
          questions:questions
        }
        res.json({ quiz:newQuiz });
      })
    })
  });
}

export function getSummary(req,res){
  var quizId = req.params.id;
  Answer.find({quizId}).exec((err,answers)=>{
    if(err){
      return res.status(500).send(err);
    }
    var questionCount = answers.length;
    var correctCount = answers.filter((answer)=>{return answer.isCorrect}).length;
    res.json({ questionCount,correctCount });

  })
}
