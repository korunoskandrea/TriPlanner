export const mustBeAuthenticated = (req, res, next) => {
    if(req.user){
        next();
        return;
    }
    res.status(401).json({error: 'Not authenticated'});
}

export const mustNotBeAuthenticated = (req, res, next) => {
    if(!req.user){
        next();
        return;
    }
    res.status(400).json({message: 'You are already authenticated'});
}