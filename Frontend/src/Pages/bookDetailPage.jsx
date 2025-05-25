// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BookDetailPage = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState({ text: '', rating: 0 });

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 console.log(`Fetching details for book ID: ${id}`);
//                 const response = await axios.get(`http://localhost:5000/book/${id}`);
//                 setBook(response.data.book);
//                 console.log(response.data);
//                 setReviews(response.data.reviews || []);
//             } catch (error) {
//                 console.error('Error fetching book details:', error);
//                 setError(error.response?.data?.message || 'Error fetching book details');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchBook();
//     }, [id]);

//     const handleSubmitReview = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post(`http://localhost:5000/book/${id}/reviews`, newReview);
//             setReviews([...reviews, response.data]);
//             setNewReview({ text: '', rating: 0 });
//         } catch (error) {
//             console.error('Error submitting review:', error);
//             setError('Error submitting review');
//         }
//     };

//     if (loading) {
//         return <div className="text-center py-8 text-xl">Loading book details...</div>;
//     }

//     if (error) {
//         return <div className="text-center py-8 text-xl text-red-500">Error: {error}</div>;
//     }

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className="flex flex-col md:flex-row">
//                 <div className="md:w-1/3 p-4">
//                     <img src={""} alt={book.title} className="w-full rounded-lg shadow-md" />
//                 </div>
//                 <div className="md:w-2/3 p-4">
//                     <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
//                     <p className="text-lg text-gray-700 mb-2">by {book.author}</p>
//                     <p className="text-gray-600 mb-4">{book.description}</p>
//                     <p className="text-xl font-semibold mb-4">Price: ${book.price}</p>
//                 </div>
//             </div>

//             <div className="mt-8">
//                 <h2 className="text-2xl font-bold mb-4">Reviews</h2>
//                 {reviews.length > 0 ? (
//                     reviews.map((review, index) => (
//                         <div key={index} className="border-b border-gray-200 py-4">
//                             <p className="text-gray-700">{review.reviewText}</p>
//                             <p className="text-yellow-500">Rating: {review.rating}/5</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">No reviews yet.</p>
//                 )}

//                 <div className="mt-8">
//                     <h3 className="text-xl font-bold mb-4">Add a Review</h3>
//                     <form onSubmit={handleSubmitReview}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2" htmlFor="review-text">
//                                 Review
//                             </label>
//                             <textarea
//                                 id="review-text"
//                                 value={newReview.text}
//                                 onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                                 required
//                             ></textarea>
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 mb-2" htmlFor="review-rating">
//                                 Rating
//                             </label>
//                             <input
//                                 id="review-rating"
//                                 type="number"
//                                 min="1"
//                                 max="5"
//                                 value={newReview.rating}
//                                 onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                                 required
//                             />
//                         </div>
//                         <button
//                             type="submit"
//                             className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
//                         >
//                             Submit Review
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookDetailPage;


// import React, { useEffect, useState } from 'react';
// import { Star, Heart, Share2, ShoppingCart, User, Calendar, BookOpen, Eye } from 'lucide-react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const BookDetailPage = () => {
//     // Demo with sample data - replace with your actual API calls
//     const { id } = useParams();
//     const [book, setBook] = useState();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [reviews, setReviews] = useState([
       
//     ]);
//     const [newReview, setNewReview] = useState({ text: '', rating: 0 ,userId:useSelector((state) => state.user),bookId:id});
//     const [isWishlisted, setIsWishlisted] = useState(false);
//     const [activeTab, setActiveTab] = useState('reviews');

//     // Replace this demo function with your actual API call
//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/book/${id}`);
//                 setBook(response.data.book);
//                 setReviews(response.data.reviews || []);
//                 console.log(response.data.reviews);
//             } catch (error) {
//                 setError(error.response?.data?.message || 'Error fetching book details');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchBook();
//     }, [id]);

//     const handleSubmitReview = async(e) => {
//         e.preventDefault();
//         if (newReview.rating <= 0 || newReview.text.trim() === '') {
//             setError('Please provide a valid rating and review text');
//             return;
//         }
//         console.log( `adding the review ${newReview}`);
//         try {
//             const response = await axios.post("http://localhost:5000/review", newReview);
//             console.log(response.data);
//             setReviews([...reviews, response.data]);
//             setNewReview({ text: '', rating: 0 });
//         } catch (error) {
//             setError('Error submitting review');
//         }
           
//         // Replace with your actual API call:
        
//     };

//     const renderStars = (rating, interactive = false, onRate = null) => {
//         return (
//             <div className="flex items-center gap-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                         key={star}
//                         className={`w-5 h-5 ${
//                             star <= rating 
//                                 ? 'fill-yellow-400 text-yellow-400' 
//                                 : interactive 
//                                     ? 'text-gray-300 hover:text-yellow-400 cursor-pointer' 
//                                     : 'text-gray-300'
//                         } ${interactive ? 'transition-colors' : ''}`}
//                         onClick={interactive ? () => onRate(star) : undefined}
//                     />
//                 ))}
//             </div>
//         );
//     };

//     if (loading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
//                     <p className="text-xl text-gray-600">Loading book details...</p>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
//                 <div className="text-center bg-white p-8 rounded-xl shadow-lg">
//                     <div className="text-red-500 text-6xl mb-4">⚠️</div>
//                     <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
//                     <p className="text-red-600 mb-4">{error}</p>
//                     <button 
//                         onClick={() => window.location.reload()} 
//                         className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
//                     >
//                         Try Again
//                     </button>
//                 </div>
//             </div>
//         );
//     }

//     if (!book) return null;

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//             {/* Hero Section */}
//             <div className="bg-white shadow-sm">
//                 <div className="container mx-auto px-4 py-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                         {/* Book Cover */}
//                         <div className="flex justify-center lg:justify-start">
//                             <div className="relative group">
//                                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
//                                 <img 
//                                     src={book.imageURL || "https://via.placeholder.com/400x600/4F46E5/FFFFFF?text=" + encodeURIComponent(book.title)} 
//                                     alt={book.title} 
//                                     className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105" 
//                                 />
//                                 <div className="absolute top-4 right-4">
//                                     <button 
//                                         onClick={() => setIsWishlisted(!isWishlisted)}
//                                         className={`p-2 rounded-full shadow-lg transition-colors ${
//                                             isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
//                                         }`}
//                                     >
//                                         <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Book Details */}
//                         <div className="space-y-6">
//                             <div>
//                                 <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{book.title}</h1>
//                                 <p className="text-xl text-gray-600 flex items-center gap-2">
//                                     <User className="w-5 h-5" />
//                                     by {book.author}
//                                 </p>
//                             </div>

//                             {/* Rating */}
//                             {book.rating && (
//                                 <div className="flex items-center gap-4">
//                                     {renderStars(book.rating)}
//                                     <span className="text-lg font-semibold text-gray-700">{book.rating}</span>
//                                     <span className="text-gray-500">({book.totalReviews || reviews.length} reviews)</span>
//                                 </div>
//                             )}

//                             {/* Description */}
//                             <div className="bg-gray-50 p-6 rounded-xl">
//                                 <p className="text-gray-700 leading-relaxed">{book.description}</p>
//                             </div>

//                             {/* Book Info */}
//                             <div className="grid grid-cols-2 gap-4">
//                                 {book.pages && (
//                                     <div className="flex items-center gap-2 text-gray-600">
//                                         <BookOpen className="w-5 h-5" />
//                                         <span>{book.pages} pages</span>
//                                     </div>
//                                 )}
//                                 {book.publishDate && (
//                                     <div className="flex items-center gap-2 text-gray-600">
//                                         <Calendar className="w-5 h-5" />
//                                         <span>Published {book.publishDate}</span>
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Price and Actions */}
//                             <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
//                                 <div className="flex items-center justify-between mb-4">
//                                     <div>
//                                         <span className="text-3xl font-bold text-green-600">${book.price}</span>
//                                         {book.originalPrice && (
//                                             <span className="text-lg text-gray-500 line-through ml-2">${book.originalPrice}</span>
//                                         )}
//                                     </div>
//                                 </div>
                                
//                                 <div className="flex gap-3">
//                                     <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
//                                         <ShoppingCart className="w-5 h-5" />
//                                         Add to Cart
//                                     </button>
//                                     <button className="px-4 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 rounded-xl transition-colors flex items-center justify-center">
//                                         <Share2 className="w-5 h-5" />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Content Tabs */}
//             <div className="container mx-auto px-4 py-8">
//                 <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//                     {/* Tab Navigation */}
//                     <div className="border-b border-gray-200">
//                         <nav className="flex">
//                             <button
//                                 onClick={() => setActiveTab('reviews')}
//                                 className={`px-6 py-4 text-sm font-medium transition-colors ${
//                                     activeTab === 'reviews'
//                                         ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
//                                         : 'text-gray-500 hover:text-gray-700'
//                                 }`}
//                             >
//                                 Reviews ({reviews.length})
//                             </button>
//                         </nav>
//                     </div>

//                     {/* Tab Content */}
//                     <div className="p-6">
//                         {activeTab === 'reviews' && (
//                             <div className="space-y-8">
//                                 {/* Reviews List */}
//                                 <div className="space-y-6">
//                                     {reviews.length > 0 ? (
//                                         reviews.map((review, index) => (
//                                             <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
//                                                 <div className="flex items-start justify-between mb-3">
//                                                     <div className="flex items-center gap-3">
//                                                         <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
//                                                             {review.user ? review.user.name[0].toUpperCase() : 'U'}
//                                                         </div>
//                                                         <div>
//                                                             <p className="font-semibold text-gray-900">{review.user.name || 'Anonymous'}</p>
//                                                             <p className="text-sm text-gray-500">{review.date}</p>
//                                                         </div>
//                                                     </div>
//                                                     {renderStars(review.rating)}
//                                                 </div>
//                                                 <p className="text-gray-700 leading-relaxed">{review.reviewText}</p>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <div className="text-center py-12">
//                                             <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                                             <h3 className="text-xl font-semibold text-gray-600 mb-2">No reviews yet</h3>
//                                             <p className="text-gray-500">Be the first to share your thoughts about this book!</p>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Add Review Form */}
//                                 <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
//                                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Review</h3>
//                                     <div  className="space-y-6">
//                                         <div>
//                                             <label className="block text-gray-700 font-semibold mb-3">
//                                                 Rating
//                                             </label>
//                                             <div className="flex items-center gap-2">
//                                                 {renderStars(newReview.rating, true, (rating) => 
//                                                     setNewReview({ ...newReview, rating })
//                                                 )}
//                                                 <span className="text-gray-600 ml-2">
//                                                     {newReview.rating > 0 ? `${newReview.rating} star${newReview.rating > 1 ? 's' : ''}` : 'Select rating'}
//                                                 </span>
//                                             </div>
//                                         </div>

//                                         <div>
//                                             <label className="block text-gray-700 font-semibold mb-3" htmlFor="review-text">
//                                                 Your Review
//                                             </label>
//                                             <textarea
//                                                 id="review-text"
//                                                 value={newReview.text}
//                                                 onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
//                                                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
//                                                 rows="4"
//                                                 placeholder="Share your thoughts about this book..."
//                                                 required
//                                             />
//                                         </div>

//                                         <button
//                                             onClick={handleSubmitReview}
//                                             type="submit"
//                                             className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
//                                         >
//                                             Submit Review
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookDetailPage;


import React, { useEffect, useState } from 'react';
import { Star, Heart, Share2, ShoppingCart, User, Calendar, BookOpen, Eye } from 'lucide-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

const BookDetailPage = () => {
    const { id } = useParams();
   
    // Get user data from Redux store
    const user = JSON.parse(localStorage.getItem('user'));;
  
    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true); // Set to true initially
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    
    // Fix: Initialize newReview properly
    const [newReview, setNewReview] = useState({ 
        text: '', 
        rating: 0,
        userId: user?.id || user?._id, // Handle different user object structures
        bookId: id 
    });
    
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [activeTab, setActiveTab] = useState('reviews');

    // Update newReview when user or id changes
    // useEffect(() => {
    //     setNewReview(prev => ({
    //         ...prev,
    //         userId: user?.id || user?._id,
    //         bookId: id
    //     }));
    // }, [user, id]);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/book/${id}`);
                setBook(response.data.book);
                setReviews(response.data.reviews || []);
                console.log(response.data.reviews);
            } catch (error) {
                console.error('Error fetching book details:', error);
                setError(error.response?.data?.message || 'Error fetching book details');
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        
        // Validation
        console.log('Submitting review:', newReview);
        if (newReview.rating <= 0 || newReview.text.trim() === '') {
            setError('Please provide a valid rating and review text');
            console.error('Invalid review data:', newReview);
            return;
        }
        
        if (!newReview.userId) {

            setError('Please log in to submit a review');
            return;
        }

        // Create review object with correct structure
        const reviewData = {
            text: newReview.text.trim(),
            rating: parseInt(newReview.rating),
            userId: newReview.userId,
            bookId: newReview.bookId
        };
        
        console.log('Submitting review:', reviewData);
        
        try {
            const response = await axios.post("http://localhost:5000/review", reviewData);
            console.log('Review submitted:', response.data);
            
            // Add the new review to the list
            setReviews([response.data, ...reviews]);
            
            // Reset form
            setNewReview({ 
                text: '', 
                rating: 0,
                userId: user?.id || user?._id,
                bookId: id 
            });
            
            // Clear any previous errors
            setError(null);
            
        } catch (error) {
            console.error('Error submitting review:', error);
            setError(error.response?.data?.message || 'Error submitting review');
        }
    };

    const renderStars = (rating, interactive = false, onRate = null) => {
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-5 h-5 ${
                            star <= rating 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : interactive 
                                    ? 'text-gray-300 hover:text-yellow-400 cursor-pointer' 
                                    : 'text-gray-300'
                        } ${interactive ? 'transition-colors' : ''}`}
                        onClick={interactive ? () => onRate(star) : undefined}
                    />
                ))}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                    <p className="text-xl text-gray-600">Loading book details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
                <div className="text-center bg-white p-8 rounded-xl shadow-lg">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h2>
                    <p className="text-red-600 mb-4">{error}</p>
                    <button 
                        onClick={() => {
                            setError(null);
                            window.location.reload();
                        }} 
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    if (!book) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Book Cover */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                                <img 
                                    src={book.imageURL || "https://via.placeholder.com/400x600/4F46E5/FFFFFF?text=" + encodeURIComponent(book.title)} 
                                    alt={book.title} 
                                    className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105" 
                                />
                                <div className="absolute top-4 right-4">
                                    <button 
                                        onClick={() => setIsWishlisted(!isWishlisted)}
                                        className={`p-2 rounded-full shadow-lg transition-colors ${
                                            isWishlisted ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:text-red-500'
                                        }`}
                                    >
                                        <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{book.title}</h1>
                                <p className="text-xl text-gray-600 flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    by {book.author}
                                </p>
                            </div>

                            {/* Rating */}
                            {book.rating && (
                                <div className="flex items-center gap-4">
                                    {renderStars(book.rating)}
                                    <span className="text-lg font-semibold text-gray-700">{book.rating}</span>
                                    <span className="text-gray-500">({book.totalReviews || reviews.length} reviews)</span>
                                </div>
                            )}

                            {/* Description */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <p className="text-gray-700 leading-relaxed">{book.description}</p>
                            </div>

                            {/* Book Info */}
                            <div className="grid grid-cols-2 gap-4">
                                {book.pages && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <BookOpen className="w-5 h-5" />
                                        <span>{book.pages} pages</span>
                                    </div>
                                )}
                                {book.publishDate && (
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-5 h-5" />
                                        <span>Published {book.publishDate}</span>
                                    </div>
                                )}
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Tab Navigation */}
                    <div className="border-b border-gray-200">
                        <nav className="flex">
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`px-6 py-4 text-sm font-medium transition-colors ${
                                    activeTab === 'reviews'
                                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                        : 'text-gray-500 hover:text-gray-700'
                                }`}
                            >
                                Reviews ({reviews.length})
                            </button>
                        </nav>
                    </div>

                    {/* Tab Content */}
                    <div className="p-6">
                        {activeTab === 'reviews' && (
                            <div className="space-y-8">
                                {/* Reviews List */}
                                <div className="space-y-6">
                                    {reviews.length > 0 ? (
                                        reviews.map((review, index) => (
                                            <div key={index} className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-500">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                            {review.user?.name ? review.user.name[0].toUpperCase() : 'U'}
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{review.user?.name || 'Anonymous'}</p>
                                                            <p className="text-sm text-gray-500">{review.date}</p>
                                                        </div>
                                                    </div>
                                                    {renderStars(review.rating)}
                                                </div>
                                                <p className="text-gray-700 leading-relaxed">{review.reviewText || review.text}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No reviews yet</h3>
                                            <p className="text-gray-500">Be the first to share your thoughts about this book!</p>
                                        </div>
                                    )}
                                </div>

                                {/* Add Review Form */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Share Your Review</h3>
                                    <form onSubmit={handleSubmitReview} className="space-y-6">
                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-3">
                                                Rating
                                            </label>
                                            <div className="flex items-center gap-2">
                                                {renderStars(newReview.rating, true, (rating) => 
                                                    setNewReview({ ...newReview, rating })
                                                )}
                                                <span className="text-gray-600 ml-2">
                                                    {newReview.rating > 0 ? `${newReview.rating} star${newReview.rating > 1 ? 's' : ''}` : 'Select rating'}
                                                </span>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-semibold mb-3" htmlFor="review-text">
                                                Your Review
                                            </label>
                                            <textarea
                                                id="review-text"
                                                value={newReview.text}
                                                onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                                                rows="4"
                                                placeholder="Share your thoughts about this book..."
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                                        >
                                            Submit Review
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;