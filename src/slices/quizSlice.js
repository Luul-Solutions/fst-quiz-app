import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quizData: [],
    profiles: [
        { id: 1, name: 'Abdalla Ali', photo: 'https://www.maxphoto.co.uk/media/wysiwyg/passport-photos/baby-passports/2_5_-min.jpg', points: 0 },
        { id: 2, name: 'Fahima Moalim', photo: 'https://i2-prod.walesonline.co.uk/incoming/article14677219.ece/ALTERNATES/s615b/Fahima.jpg', points: 0 },
    ],
    quizTaker: {
        name: '',
        score: 0,
    },
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuizData: (state, action) => {
            state.quizData = action.payload;
        },
        addProfile: (state, action) => {
            state.profiles.push(action.payload);
        },
        updateProfilePoints: (state, action) => {
            const { id, points } = action.payload;
            const profile = state.profiles.find(profile => profile.id === id);
            if (profile) {
                profile.points = points;
            }
        },
        addQuestion: (state, action) => {
            state.quizData.push(action.payload);
        },
        setQuizTaker: (state, action) => {
            state.quizTaker = action.payload;
        },
    },
});

export const { setQuizData, addProfile, updateProfilePoints, addQuestion, setQuizTaker } = quizSlice.actions;

export default quizSlice.reducer;
