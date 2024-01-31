var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'GooseHost',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/dashboard', requiresAuth(), function (req, res, next) {
  res.render('dashboard', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'User Dashboard',
  });
});


router.get('/dev', requiresAuth(), function (req, res, next) {
  res.render('dev', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Developer Hub'
  });
});




module.exports = router;
 