import { Router} from 'express';
import deuses from '../controllers/deuses';

const router = Router();

router.get('/', deuses.listar.bind(deuses));
router.get('/:id', deuses.encontrar.bind(deuses));
router.post('/novo', deuses.adicionar.bind(deuses));
router.post('/editar/:id', deuses.editar.bind(deuses));
router.post('/salvar_todos', deuses.adicionarEmLote.bind(deuses));
router.get('/excluir/:id', deuses.excluir.bind(deuses));

export = router;
