import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import QuizPage from './pages/QuizPage';
import AdminPage from './pages/AdminPage';
import ProfilePage from './pages/ProfilePage';
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 min-h-screen flex flex-col items-center justify-center text-white">
          <nav className="w-full p-4 bg-white shadow-md">
            <ul className="flex space-x-6 justify-center">
              <li>
                <Link to="/" className="text-blue-600 font-semibold text-xl hover:text-purple-700 transition duration-300">Quiz</Link>
              </li>
              <li>
                <Link to="/admin" className="text-blue-600 font-semibold text-xl hover:text-purple-700 transition duration-300">Admin</Link>
              </li>
              <li>
                <Link to="/profiles" className="text-blue-600 font-semibold text-xl hover:text-purple-700 transition duration-300">Profiles</Link>
              </li>
            </ul>
          </nav>
          <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mt-6">
            <Routes>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/profiles" element={<ProfilePage />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/" element={<QuizPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
