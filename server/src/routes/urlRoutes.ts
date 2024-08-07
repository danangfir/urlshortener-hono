import { Hono } from 'hono';
import { shortenURL, redirectURL } from '../controllers/urlController';

const router = new Hono();

router.post('/shorten', shortenURL);
router.get('/:short_url', redirectURL);

export default router;
