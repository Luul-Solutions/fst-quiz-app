import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from '../slices/quizSlice';

function AdminPage() {
    const dispatch = useDispatch();
    const [newQuestion, setNewQuestion] = useState({
        question: '',
        options: ['', '', '', ''],
        correct: ''
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        if (name === 'question' || name === 'correct') {
            setNewQuestion({ ...newQuestion, [name]: value });
        } else {
            const newOptions = [...newQuestion.options];
            newOptions[index] = value;
            setNewQuestion({ ...newQuestion, options: newOptions });
        }
    };

    const handleAddQuestion = () => {
        dispatch(addQuestion(newQuestion));
        setNewQuestion({
            question: '',
            options: ['', '', '', ''],
            correct: ''
        });
    };

    const handleSave = () => {
        alert('Quiz data updated successfully');
    };

    return (
        <div className="p-8 bg-white text-black rounded-lg shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>
            <div className="space-y-4">
                <input
                    type="text"
                    name="question"
                    value={newQuestion.question}
                    onChange={handleInputChange}
                    placeholder="New Question"
                    className="w-full p-4 border rounded-lg text-xl"
                />
                {newQuestion.options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        name={`option${index}`}
                        value={option}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder={`Option ${index + 1}`}
                        className="w-full p-4 border rounded-lg text-xl"
                    />
                ))}
                <input
                    type="text"
                    name="correct"
                    value={newQuestion.correct}
                    onChange={handleInputChange}
                    placeholder="Correct Answer"
                    className="w-full p-4 border rounded-lg text-xl"
                />
                <button
                    onClick={handleAddQuestion}
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-green-700 transition duration-300"
                >
                    Add Question
                </button>
            </div>
            <button
                onClick={handleSave}
                className="w-full mt-6 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-xl hover:bg-blue-700 transition duration-300"
            >
                Save
            </button>
        </div>
    );
}

export default AdminPage;
