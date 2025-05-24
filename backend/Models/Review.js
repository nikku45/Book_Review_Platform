const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {
        book: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            required: [true, "Associated book is required"],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required: [true, "Reviewer is required"],
        },
        reviewText: {
            type: String,
            required: [true, "Review text is required"],
            maxlength: [1000, "Review text cannot exceed 1000 characters"],
        },
        rating: {
            type: Number,
            required: [true, "Rating is required"],
            min: [1, "Rating must be at least 1"],
            max: [5, "Rating cannot exceed 5"],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, 
    }
);

module.exports = mongoose.model("Review", reviewSchema);
