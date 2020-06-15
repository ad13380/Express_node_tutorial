var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Express' });
});

router.post('/', function(req, res) {
  console.log('lead email: ', req.body.lead_email);
  res.redirect('/');
});

module.exports = router;
