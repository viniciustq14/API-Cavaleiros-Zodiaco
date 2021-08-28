import express from 'express';
import cavaleiros from '../controllers/cavaleiros';

const router = express.Router();

router.get('/cavaleiros', cavaleiros.listar);
router.get('/cavaleiro/:id', cavaleiros.encontrar);

export = router;
