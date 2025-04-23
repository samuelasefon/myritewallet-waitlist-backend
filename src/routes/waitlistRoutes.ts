import { Router } from 'express';
import WaitlistController from '../controllers/waitlistController';

const router = Router();
const waitlistController = new WaitlistController();

// Define routes
router.post('/waitlist', (req, res) => waitlistController.addToWaitlist(req, res)); // Bind the method
router.get('/waitlist', (req, res) => waitlistController.getWaitlist(req, res)); // Bind the method

// Function to set routes in the app
const setRoutes = (app: any) => {
  app.use('/api', router); // Prefix all routes with '/api'
};

export { setRoutes }; // Named export for setRoutes
export default router; // Default export for the router