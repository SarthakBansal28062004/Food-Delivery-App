import express from 'express'
import { addToCart, removeFromCart, getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

// creating express router 
const cartRouter = express.Router();

// defining api end points for cart
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;