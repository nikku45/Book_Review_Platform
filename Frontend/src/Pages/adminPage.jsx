import React, { useState } from 'react';
import axios from 'axios';

const AdminAddBookPage = () => {
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: '',
        genre: '',
        image: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/book', book);
            if (response.status === 201) {
                setSuccess(true);
                setBook({
                    title: '',
                    author: '',
                    description: '',
                    genre: '',
                    image: '',
                });
            }
        } catch (error) {
            console.error('Error adding book:', error);
            setError('Error adding book');
        }
    };
 


    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Add a New Book</h1>
            {error && <div className="text-center py-4 text-xl text-red-500">Error: {error}</div>}
            {success && (
                <div className="text-center py-4 text-xl text-green-500">
                    Book added successfully!
                </div>
            )}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={book.author}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={book.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="genre">
                        genre
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="genre"
                        value={book.genre}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="image">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={book.image}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                    />
                </div>
                <button
                     
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AdminAddBookPage;
