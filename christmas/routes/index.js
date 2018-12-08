var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res){
    console.log("/ Route");
    res.render('userlists');
//    console.log(req);
    /*console.log(req.session);
    if (req.session.user) {
      console.log("/ Route if user");
      res.render('userlists', {username: req.session.username,
                           msg:req.session.msg,
                           color:req.session.color});
    } else {
      console.log("/ Route else user");
      req.session.msg = 'Access denied!';
      res.redirect('/login');
    }*/
});

module.exports = router;
