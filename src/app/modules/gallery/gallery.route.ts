import express from 'express';
import { GalleryController } from './gallery.controller';

const router = express.Router();

router.get('/', GalleryController.getData);

router.post('/', GalleryController.createData);

router.patch('/swap-serial', GalleryController.swapSerial);

router.patch('/:id', GalleryController.update);

export const GalleryRoutes = router;
