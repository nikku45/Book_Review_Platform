const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User"); // Import your User model
const { route } = require("./UserRoute");
const router = express.Router();


const JWT_SECRET = "jwt_secret"; // Replace with a strong secret key


router.post("/register", async (req, res) => {
    console.log("Register endpoint hit");
    console.log("Request body:", req.body);
    try {
        const { name, email, password,role } = req.body;
        if(role && role !== "user" && role !== "admin") {
            return res.status(400).json({ message: "Invalid role" });
        }
        if(role===undefined){
            role="user";
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = new User({ name, email, password,role });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});


router.post("/login", async (req, res) => {
    console.log("Login endpoint hit");
    console.log("Request body:", req.body);
    try {
        const { email, password, role } = req.body;
        const userRole = role || "user";
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        if (user.role !== userRole) {
            return res.status(403).json({ message: "Access denied" });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email,role:user.role } });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

router.get("/profile/:id", async (req, res) => {
    console.log("Profile endpoint hit");
    const userId = req.params.id;
    console.log("User ID:", userId);
    try {
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found", });
        }
        res.status(200).json({user,reviews:(await user.populate("reviews"))});
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
});
router.put("/profile/:id", async (req, res) => {
    console.log("Update profile endpoint hit");
    const userId = req.params.id;
    const { name, email } = req.body;
    console.log("User ID:", userId);
    console.log("Request body:", req.body);
    try {
        const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).json({ message: "Internal server error", error });
    }
});





module.exports = router;
