module.exports = {
    ensureAuthenticated: function(req, res, next){
        //If authenticated, then proceed as normal
        //isAuthenticated is a passport function that checks if you're authenticated
        if(req.isAuthenticated()){
            return next();
        }

        //Redirect to home page if not authenticated
        res.redirect('/');
    },

    ensureGuest: function(req, res, next){
        //Send user to dashboard if logged in
        if(req.isAuthenticated()){
            res.redirect('/dashboard');
        }

        else{
            return next();
        }
    }
}