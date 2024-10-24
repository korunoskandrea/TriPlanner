import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateSecretToken = (id) => {
    return jwt.sign({id}, process.env.JWT_TOKEN_KEY, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}

