import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// AsyncThunk for user login
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            // Use a relative URL to match your backend proxy or environment
            const response = await axios.post('http://localhost:5000/user/login', credentials);
            // Ensure the response structure matches what you expect in reducers
            // Example: { user: ..., token: ... }
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || error.message || 'Login failed'
            );
        }
    }
)
 
    




// AsyncThunk for user signup
export const signupUser = createAsyncThunk(
    'user/signupUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/user/register', userData);
            return response.data; // token and user details
        } catch (error) {
            return rejectWithValue(error.response.data.message || error.message);
        }
    }
);

// Initial state
const initialState = {
    user: null,          // Stores user details
    token: null,         // Stores JWT token
    status: 'idle',      // idle | loading | succeeded | failed
    error: null          // Stores error messages
};

// User slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null;
            state.token = null;
            state.status = 'idle';
        }
    },
    extraReducers: (builder) => {
        // Login
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to login';
            });

        // Signup
        builder
            .addCase(signupUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload || 'Failed to sign up';
            });
    }
});

// Exporting actions
export const { logoutUser } = userSlice.actions;

// Exporting reducer
export default userSlice.reducer;
