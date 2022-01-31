import { Router } from "express";
import usersRoutes from './modules/Users/users.routes';
import tagsRoutes from './modules/Tags/tags.routes';
import authRoutes from './modules/Auth/auth.routes';
import complimentsRoutes from './modules/Compliments/compliments.routes';

const routes = Router();

routes.use(authRoutes);
routes.use(usersRoutes);
routes.use(tagsRoutes);
routes.use(complimentsRoutes);

export default routes;
