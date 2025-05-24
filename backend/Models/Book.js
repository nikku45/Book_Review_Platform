const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Book title is required"],
        },
        author: {
            type: String,
            required: [true, "Author name is required"],
        },
        genre: {
            type: String,
            required: [true, "Genre is required"],
        },
        summary: {
            type: String,
            required: false,
        },
        ratings: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review", // Reference to the Review model
            },
        ],
        imageURL: {
            type: String,
            default: "https://via.placeholder.com/150", // Default placeholder image
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically adds `createdAt` and `updatedAt` timestamps
    }
);

module.exports = mongoose.model("Book", bookSchema);
