var express = require('express');

var apiRouter = express.Router();

var homeCtrl = require('./controllers/home').homeCtlr;
var CouponCtrl = require('./controllers/coupons');

apiRouter.route('/')
	.get(homeCtrl);

apiRouter.route('/coupons')
	.get(CouponCtrl.CPN)
	.post(CouponCtrl.addCoupon);

module.exports = apiRouter;