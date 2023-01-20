import React, { useState } from 'react';
import './index.css'
export default function App2() {
	const questions = [
		{
			questionText: 'What did Lubay Assen said ',
			answerOptions: [
				{ answerText: 'ere wedya', 
				isCorrect: false },
				{ answerText: 'bebey',
				 isCorrect: false },
				{ answerText: 'Anchis QoloQolo bey', isCorrect: true },
				{ answerText: 'yihenu zm bey', isCorrect: false },
			],
		},
		{
			questionText: 'where did neway say shufer eyew eza gebrie?',
			answerOptions: [
				{ answerText: 'Addis Abeba', isCorrect: false },
				{ answerText: 'Dessie', isCorrect: true },
				{ answerText: 'Tisa', isCorrect: false },
				{ answerText: 'Haik', isCorrect: false },
			],
		},
		{
			questionText: 'who said ye zenbna ye sew nefs and new',
			answerOptions: [
				{ answerText: 'mr bean',isCorrect: false  },
				{ answerText: 'josef kenedy', isCorrect: false },
				{ answerText: 'einstein', isCorrect: false },
				{ answerText: 'None ', isCorrect: true },
			],
		},
		{
			questionText: 'Which one has great value in Neway',
			answerOptions: [
				{ answerText: 'sleep', isCorrect: false },
				{ answerText: 'food', isCorrect: false },
				{ answerText: 'dressing well', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
		<h1>FAMILY EXAM FOR ALEX AND TES</h1>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}

					<h3>Have a good day Alex and Tes</h3>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
