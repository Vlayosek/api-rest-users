import express from 'express';
import { getItems, getItem, createItem  } from '../controllers/tracks.js';
const router = express.Router();

//TODO http://localhost:3000/tracks GET all tracks
router.get('/', getItems);
router.get('/:id', getItem );
router.post('/',createItem);

export default router;