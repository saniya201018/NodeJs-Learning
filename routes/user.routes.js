import express from 'express';
import { users, userById, createUser, userDeleteById, allUserDelete } from '../controllers/user.controller.js'
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// code without controller
// router.get('/', (req, res) => {
//     res.send("User List");
// });
// router.get('/:id', (req, res) => {
//     res.send(`User id: ${req.params.id}`);
// });
// router.post('/', (req, res) => {
//     res.send(`User Create`);
// });

// code with controller
router.get('/', users);
router.get('/:id', userById);
router.delete('/:id', userDeleteById);
router.delete('/', allUserDelete);
router.post('/', authMiddleware, createUser);

export default router;