import React from 'react';
import { useSelector } from 'react-redux';

function ProfilePage() {
    const profiles = useSelector(state => state.quiz.profiles);

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Profiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profiles.map(profile => (
                    <div key={profile.id} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <img
                            src={profile.photo}
                            alt={profile.name}
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
                        <p className="text-xl text-gray-600">Points: {profile.points}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
