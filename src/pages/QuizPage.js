import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setQuizData, setQuizTaker } from '../slices/quizSlice';

function QuizPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quizData = useSelector(state => state.quiz.quizData);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        fetch('/quizData.json')
            .then(response => response.json())
            .then(data => dispatch(setQuizData(data)));
    }, [dispatch]);

    const handleAnswerSelect = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            setScore(score + 1);
        }
        setSelectedAnswer('');
        if (currentQuiz < quizData.length - 1) {
            setCurrentQuiz(currentQuiz + 1);
        } else {
            dispatch(setQuizTaker({ name, score }));
            navigate('/results');
        }
    };

    if (quizData.length === 0) return <div>Loading...</div>;

    return (
        <div className="space-y-6">
            {currentQuiz === 0 && (
                <div className="mb-6 text-black">
                    <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="name">Enter your full name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full p-4 border rounded-lg text-xl"
                    />
                </div>
            )}
            <h2 className="text-3xl font-semibold text-gray-800">{quizData[currentQuiz].question}</h2>
            <ul className="list-none space-y-4">
                {quizData[currentQuiz].options.map((option, index) => (
                    <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <label className="inline-flex items-center w-full cursor-pointer">
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={handleAnswerSelect}
                                className="form-radio h-5 w-5 text-blue-600"
                            />
                            <span className="ml-4 text-xl text-gray-700">{option}</span>
                        </label>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300"
            >
                {currentQuiz === quizData.length - 1 ? 'Submit and See Results' : 'Submit'}
            </button>
        </div>
    );
}

export default QuizPage;
