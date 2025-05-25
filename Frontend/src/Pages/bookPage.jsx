// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBooks } from '../redux/Slices/bookSlice'; // Adjust import path based on your structure

// const BooksPage = () => {
//     const dispatch = useDispatch();
//     const { books, status, error } = useSelector((state) => state.books);

//     useEffect(() => {
//         dispatch(fetchBooks());
//     }, [dispatch]);

//     if (status === 'loading') {
//         return <div className="text-center py-8 text-xl">Loading books...</div>;
//     }

//     if (status === 'failed') {
//         return <div className="text-center py-8 text-xl text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {books.map((book) => (
//                     <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
//                         <img
//                             src={book.image}
//                             alt={book.title}
//                             className="w-full h-48 object-cover"
//                         />
//                         <div className="p-4">
//                             <h2 className="text-xl font-semibold mb-2 text-gray-800">{book.title}</h2>
//                             <p className="text-gray-600 mb-4">by {book.author}</p>
//                             <button
//                                 className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
//                                 onClick={() => alert(`More details about: ${book.title}`)}
//                             >
//                                 View Details
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BooksPage;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/Slices/bookSlice'; // Adjust import path based on your structure

const BooksPage = () => {
    const dispatch = useDispatch();
    const { books, status, error } = useSelector((state) => state.books);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (status === 'loading') {
        return <div className="text-center py-8 text-xl">Loading books...</div>;
    }

    if (status === 'failed') {
        return <div className="text-center py-8 text-xl text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search by title or author..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map((book) => (
                    <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:-translate-y-2">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">{book.title}</h2>
                            <p className="text-gray-600 mb-4">by {book.author}</p>
                            <button
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition-colors duration-300"
                                onClick={() => alert(`More details about: ${book.title}`)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksPage;

