require('dotenv').config();
const mongoose = require('mongoose');
const Book=require("./Models/Book")
const bookdata=[
  {
    "_id": "64bdf2c85e6f4aeb9a45a681",
    "title": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "publishedYear": 1949,
    "rating": 4.8,
    
  },
  {
    "_id": "64bdf2c85e6f4aeb9a45a682",
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "publishedYear": 1813,
    "rating": 4.6,
    
  },
  {
    "_id": "64bdf2c85e6f4aeb9a45a683",
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "publishedYear": 1951,
    "rating": 4.3,
    
  },
  {
    "_id": "64bdf2c85e6f4aeb9a45a684",
    "title": "Moby Dick",
    "author": "Herman Melville",
    "genre": "Adventure",
    "publishedYear": 1851,
    "rating": 4.0,
    
  },
  {
    "_id": "64bdf2c85e6f4aeb9a45a685",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "publishedYear": 1937,
    "rating": 4.9,
   
  }
]

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');

    // Check if the Book collection is empty
    const count = await Book.countDocuments();
    if (count === 0) {
      // Insert book data if the collection is empty
      await Book.insertMany(bookdata);
      console.log('Book data seeded successfully');
    } else {
      console.log('Book collection already has data, skipping seeding');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

connectDB();
