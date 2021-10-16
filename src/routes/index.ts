import { Router } from 'express';
import Cavaleiros from './cavaleiros';
import Deuses from './deuses';
import Reencarnacoes from './reencarnacoes';

const router = Router()

router.use('/cavaleiros', Cavaleiros);
router.use('/deuses', Deuses);
router.use('/reencarnacoes', Reencarnacoes);

export = router;
