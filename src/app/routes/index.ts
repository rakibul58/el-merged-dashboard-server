import { Router } from 'express';
import { OrganizationRoutes } from '../modules/Organization/organization.route';
import { UserRoutes } from '../modules/User/user.route';

const router = Router();

// All the routes in the project
const moduleRoutes = [
  {
    path: '/organizations',
    route: OrganizationRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  }
];

// lopping through the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
