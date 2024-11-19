import Newsletter from '../models/Newsletter.js';

// Subscribe a new email
export const subscribeEmail = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    try {
        const newEmail = new Newsletter({ email });
        await newEmail.save();
        res.status(201).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        if (error.code === 11000) { 
            res.status(400).json({ message: 'Email already subscribed!' });
        } else {
            res.status(500).json({ message: 'Something went wrong!' });
        }
    }
};
