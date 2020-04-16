import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliverieController from './app/controllers/DeliverieController';
import DeliverieDeliverymanController from './app/controllers/DeliverieDeliverymanController';
import DeliverieProblemsController from './app/controllers/DeliverieProblemsController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import NotificationController from './app/controllers/NotificationController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/deliveries', DeliverieController.index);
routes.post('/deliveries', DeliverieController.store);
routes.put('/deliveries/:id', DeliverieController.update);
routes.delete('/deliveries/:id', DeliverieController.delete);

routes.get('/deliveryman/:id/deliveries', DeliverieDeliverymanController.index);
routes.put(
  '/deliveryman/:id/deliveries/:idDeliverie',
  DeliverieDeliverymanController.update
);

routes.get('/delivery/:id/problems', DeliverieProblemsController.index);
routes.get('/delivery/problems', DeliverieProblemsController.index);
routes.post('/delivery/:id/problems', DeliverieProblemsController.store);
routes.delete(
  '/problem/:id/cancel-delivery',
  DeliverieProblemsController.delete
);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
