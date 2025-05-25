import React from 'react';
import './App.css'; // Assuming you have a CSS file for global styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import HomePage from './pages/HomePage';
import BookListPage from './Pages/bookPage';
import BookDetailPage from './Pages/bookDetailPage';
import ProtectedRoute from './Components/ProtectedRoute';
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
                 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<RegisterPage />} />
                    
                     <Route path="/books" element={
                        <ProtectedRoute>
                            <BookListPage />
                        </ProtectedRoute>
                     } />
                      
                     <Route path="/books/:id" element={
                      <ProtectedRoute>
                        <BookDetailPage />
                      </ProtectedRoute>
                    } />
                     
                </Routes>
                {/* <Footer /> */}
            </Router>
        // </Provider>
    );
};

export default App;
