const questionsModel = require('../models/questions/questions-model.js')
const findAllQuestions = () => questionsModel.find()
const findQuestionById = (qId) => questionsModel.findById(qId)
const findQuestionsForQuiz = (qzid) => questionsModel.find({quizId: qzid})
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }