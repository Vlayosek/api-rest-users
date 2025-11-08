import express from 'express';
const router = express.Router();

//TODO http://localhost:3000/tracks GET all tracks
router.get('/', (req, res) => {
    // Placeholder response
    res.send({ message: 'Get all tracks', tracks: [] });
});

export default router;