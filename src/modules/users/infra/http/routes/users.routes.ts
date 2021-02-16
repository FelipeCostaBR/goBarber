import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UsersAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const userController = new UsersController();
const upload = multer(uploadConfig);
const userAvatarController = new UsersAvatarController();

usersRouter.post('/', userController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
