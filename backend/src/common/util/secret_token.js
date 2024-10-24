import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateSecretToken = (id, email) => {
    return jwt.sign({id, email}, process.env.JWT_TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}

