import { Request, Response } from 'express';
import WaitlistModel from '../models/waitlistModel';
import connection from '../database/connection'; // Import the database connection
import { sendThankYouEmail } from '../utils/emailService'; // Import the email utility

class WaitlistController {
    private waitlistModel: WaitlistModel;

    constructor() {
        this.waitlistModel = new WaitlistModel(connection); // Initialize the model with the database connection
        this.addToWaitlist = this.addToWaitlist.bind(this); // Bind the method
        this.getWaitlist = this.getWaitlist.bind(this); // Bind the method
    }

    // Add a user to the waitlist
    async addToWaitlist(req: Request, res: Response): Promise<Response> {
        const { name, email } = req.body;

        // Validate input
        if (!name || !email) {
            return res.status(400).json({ message: 'Name and email are required.' });
        }

        try {
            // Add the user to the waitlist using the model
            await this.waitlistModel.addUserToWaitlist(name, email);

            // Send a thank-you email
            await sendThankYouEmail(email, name);

            return res.status(201).json({ message: 'Successfully added to the waitlist.' });
        } catch (error) {
            console.error('Error adding to waitlist:', error);
            if ((error as any).code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: 'This email is already on the waitlist.' });
            }
            return res.status(500).json({ message: 'An error occurred while adding to the waitlist.' });
        }
    }

    // Retrieve the waitlist
    async getWaitlist(req: Request, res: Response): Promise<Response> {
        try {
            // Retrieve the waitlist using the model
            const waitlist = await this.waitlistModel.getWaitlistUsers();

            return res.status(200).json({ message: 'Waitlist retrieved successfully.', data: waitlist });
        } catch (error) {
            console.error('Error retrieving waitlist:', error);
            return res.status(500).json({ message: 'An error occurred while retrieving the waitlist.' });
        }
    }
}

export default WaitlistController;