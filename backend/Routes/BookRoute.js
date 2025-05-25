const router=require("express").Router();
const Book = require("../Models/Book"); 
const Review = require("../Models/Review");

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    
    
    try {
        const book = await Book.findById(id);
        
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
      
        res.status(200).json({book, reviews: await Review.find({ book: id }).populate("user", "name")});
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.post("/", async (req, res) => {
    const { title, author,description,genre, imageURL } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            genre,
            description,
            imageURL
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: "Error creating book", error });
    }
});


module.exports= router;