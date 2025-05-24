const router = require('express').Router();
const User = require('../Models/User');
const { route } = require('./UserRoute');

// Get user profile
router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {   
        res.status(500).json({ message: 'Internal server error', error });
    }
});
// Update user profile
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if provided
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password; // Note: Password should be hashed before saving

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: 'Error updating profile', error });
    }
});

module.exports = router;