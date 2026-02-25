import express from 'express';
import { sendContactEmail, getContactInfo } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', sendContactEmail);
router.get('/info', getContactInfo);

export default router;
