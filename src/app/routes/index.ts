import express from 'express';
import { GalleryRoutes } from '../modules/gallery/gallery.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/gallery',
    routes: GalleryRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));

export default router;
