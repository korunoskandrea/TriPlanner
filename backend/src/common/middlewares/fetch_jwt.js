import jwt from "jsonwebtoken";

export const fetchJwt = async (req, res, next) => {
    let token = 'Invalid';
    if(req.headers.authorization) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.query['token']) {
        token = req.query['token'];
    }

    try{
        req.user = await jwt.verify(token, process.env.JWT_TOKEN_KEY);
    } catch(err) {
    }
    next();
}