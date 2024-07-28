import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ResultsPage() {
    const quizTaker = useSelector(state => state.quiz.quizTaker);
    const quizData = useSelector(state => state.quiz.quizData);

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Quiz Results</h1>
            <p className="text-xl mb-4">{quizTaker.name}, you scored {quizTaker.score} out of {quizData.length}!</p>
            <Link to="/" className="mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300">
                Take Quiz Again
            </Link>
        </div>
    );
}

export default ResultsPage;
