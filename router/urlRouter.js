import express from 'express';
import { generateNewShortUrl,
    updareUrlandTime ,clickAnalytice} from '../controller/controller.js';


const router = express.Router();


router.post('/',generateNewShortUrl);
router.get('/:shortId',updareUrlandTime);
router.get('/analytics/:shortId',clickAnalytice);
// router.get('/urls/allurl',getAllUrl);



export default router;