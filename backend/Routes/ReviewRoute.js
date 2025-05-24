const router = require('express').Router();
const User = require('../Models/User');
const Review=require('../Models/Review')
const Book = require('../Models/Book');



router.get('/:id/review', async (req, res) => {
    const bookId = req.params.id;
    console.log(bookId);
    if (!bookId) {
        return res.status(400).json({ message: 'Book ID is required' });
    }
    try {
        const book = await Book.findById(bookId).populate('reviews');
        if (!book || !book.reviews || book.reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found' });
        }
        res.status(200).json(book.reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

router.post('/:id/review', async (req, res) => {
    const { userId, bookId, rating, reviewText } = req.body;

    try {
        const user = await User.findById(userId);
        const book=await Book.findById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newReview = new Review({
            user: userId,
            book: bookId,
            rating,
           reviewText
        });
        user.reviews.push(newReview._id);
        await user.save();
        book.reviews.push(newReview._id);
        await book.save();
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: 'Error creating review', error });
    }
});

module.exports = router;