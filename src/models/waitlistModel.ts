import { Pool } from 'mysql2/promise';


class WaitlistModel {
    private connection: Pool;

    constructor(connection: Pool) {
        this.connection = connection;
    }

    async addUserToWaitlist(name: string, email: string): Promise<any> {
        const query = 'INSERT INTO waitlist (name, email) VALUES (?, ?)';
        const [result] = await this.connection.execute(query, [name, email]);
        return result;
    }

    async getWaitlistUsers(): Promise<any[]> {
        const query = 'SELECT * FROM waitlist';
        const [rows] = await this.connection.execute(query);
        return rows as any[];
    }
}

export default WaitlistModel;