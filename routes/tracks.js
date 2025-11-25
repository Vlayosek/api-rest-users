import express from 'express';
import { getItems, getItem  } from '../controllers/tracks.js';
const router = express.Router();

//TODO http://localhost:3000/tracks GET all tracks
router.get('/', getItems);
router.get('/:id', getItem );

export default router;