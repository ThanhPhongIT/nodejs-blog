const Post = require('../models/blog');

class SiteController {
    search(req, res) {
        res.render('search');
    }
    home(req, res) {
        Post.find({}, function(err, posts) {
            if (!err) {
                res.json(posts);
                return;
            }
            res.status(400).json({ error: 'ERROR!!!' });
        })

    }
}
module.exports = new SiteController;