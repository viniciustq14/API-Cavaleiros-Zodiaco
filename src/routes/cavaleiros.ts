import { Router } from 'express';
import cavaleiros from '../controllers/cavaleiros';

const router = Router();

router.get('/', cavaleiros.listar.bind(cavaleiros));
router.get('/:id', cavaleiros.encontrar.bind(cavaleiros));
router.post('/novo', cavaleiros.adicionar.bind(cavaleiros));
router.post('/editar/:id', cavaleiros.editar.bind(cavaleiros));
router.post('/salvar_todos', cavaleiros.adicionarEmLote.bind(cavaleiros));
router.get('/excluir/:id', cavaleiros.excluir.bind(cavaleiros));

export = router;
