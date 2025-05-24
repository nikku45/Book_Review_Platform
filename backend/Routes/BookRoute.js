const router=require("express").Router();
const Book = require("../Models/Book"); 

router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.post("/", async (req, res) => {
    const { title, author, genre, summary, ratings, imageURL } = req.body;

    try {
        const newBook = new Book({
            title,
            author,
            genre,
            summary,
            ratings,
            imageURL
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: "Error creating book", error });
    }
});


module.exports= router;