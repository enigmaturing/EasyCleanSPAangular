import { Purchase } from './purchase';

export interface User {
    id: number;
    email: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    remainingCredit: number;
    age?: number;
    city?: string;
    country?: string;
    gender?: string;
    purchases?: Purchase[];
}
