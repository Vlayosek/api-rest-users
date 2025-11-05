import express from 'express';
const router = express.Router();

//TODO http://localhost:3000/tracks GET all tracks
router.get('/', (req, res) => {
    // Placeholder response
    res.json({ message: 'Get all tracks' });
});

export default router;