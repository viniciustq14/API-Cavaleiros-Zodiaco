import { Router } from 'express';
import reencarnacoes from '../controllers/reencarnacoes';

const router = Router();

router.get('/', reencarnacoes.listar.bind(reencarnacoes));
router.get('/:id', reencarnacoes.encontrar.bind(reencarnacoes));
router.post('/novo', reencarnacoes.adicionar.bind(reencarnacoes));
router.post('/editar/:id', reencarnacoes.editar.bind(reencarnacoes));
router.post('/salvar_todos', reencarnacoes.adicionarEmLote.bind(reencarnacoes));
router.get('/excluir/:id', reencarnacoes.excluir.bind(reencarnacoes));

export = router;
