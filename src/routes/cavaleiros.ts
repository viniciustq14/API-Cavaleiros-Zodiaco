import express from 'express';
import cavaleiros from '../controllers/cavaleiros';

const router = express.Router();

router.get('/cavaleiros', cavaleiros.listar.bind(cavaleiros));
router.get('/cavaleiro/:id', cavaleiros.encontrar.bind(cavaleiros));
router.post('/cavaleiros/novo', cavaleiros.adicionar.bind(cavaleiros));
router.post('/cavaleiros/editar/:id', cavaleiros.editar.bind(cavaleiros));
router.get('/cavaleiros/excluir/:id', cavaleiros.excluir.bind(cavaleiros));

export = router;
