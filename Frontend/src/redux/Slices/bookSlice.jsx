import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk to fetch all books
export const fetchBooks = createAsyncThunk('', async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get('http://localhost:5000/book'); // Ensure backend API `/books` exists
        return response.data; // Array of books
    } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch books');
    }
});

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default bookSlice.reducer;
