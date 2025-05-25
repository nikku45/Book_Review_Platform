import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Slices/bookSlice';
// import reviewReducer from './slices/reviewSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        books: bookReducer,
        // reviews: reviewReducer,
        users: userReducer
    },
});

export default store;
