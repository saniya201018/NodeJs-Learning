import express from 'express';
import { users, userById, createUser, userDeleteById, allUserDelete, updateUser, signUpController, signInController } from '../controllers/user.controller.js'
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
router.get('/',authMiddleware, users);
router.get('/:id', userById);
router.delete('/:id', userDeleteById);
router.delete('/', allUserDelete);
router.put('/:id', updateUser);
router.patch('/:id', updateUser);
router.post('/', authMiddleware, createUser);
router.post('/signup', signUpController);
router.post('/signin', signInController);

export default router;