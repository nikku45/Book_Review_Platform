import React from 'react';
import './App.css'; // Assuming you have a CSS file for global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import HomePage from './pages/HomePage';
import BookListPage from './Pages/bookPage';
// import BookDetailPage from './pages/BookDetailPage';
// import ProfilePage from './pages/ProfilePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/SignupPage';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';


const App = () => {
    return (
        <Provider store={store}>
            <Router>
                {/* <Navbar /> */}
                <Routes>
                    {/* <Route path="/" element={<HomePage />} />
                   
                    <Route path="/books/:id" element={<BookDetailPage />} />
                    <Route path="/profile" element={<ProfilePage />} /> */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                     <Route path="/books" element={<BookListPage />} />
                </Routes>
                {/* <Footer /> */}
            </Router>
        // </Provider>
    );
};

export default App;
