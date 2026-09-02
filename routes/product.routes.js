import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Products List");
});
router.get('/:id', (req, res) => {
    res.send(`Product id: ${req.params.id}`);
});
router.post('/', (req, res) => {
    res.send(`Product Create`);
});

export default router;