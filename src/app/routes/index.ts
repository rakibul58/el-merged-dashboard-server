import { Router } from 'express';
import { OrganizationRoutes } from '../modules/Organization/organization.route';

const router = Router();

// All the routes in the project
const moduleRoutes = [
  {
    path: '/organizations',
    route: OrganizationRoutes,
  }
];

// lopping through the routes
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
