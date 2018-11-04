var async = require("async")
var csvtojson = require("csvtojson")
var Question = require("../models/question.js")

const csvFilePath=__dirname+"/question.csv";
csvtojson().fromFile(csvFilePath)
	.then((questions)=>{
		async.each(questions,(question,cb)=>{
			var options = question.options.split(";");

			question.options = options.map((option,i)=>{
				if(option==question.answer){
					question.correctAnswerId = i;					
				}
				return {
					id:i,
					answer:option
				}
			})

			Question.create(question).then((err,data)=>{
				console.log(err,data)
			})
		})
	},(err,done)=>{
		if(err){
			console.log(err)
		}
		else{
			console.log("Done")
		}
	})