var { wrap: async } = require('co');

var Coupon = require('../models/coupon');

exports.addCoupon = async(function* (req, res) {
    var coupon = new Coupon(req.body);

    try{
        yield coupon.save();

        res.send(coupon.toObject());
    } catch(err) {
        res.send(err);
    }
});

exports.CPN = async(function* (req, res) {

    try{
        var coups = yield Coupon.find({}).exec();


        res.json(coups);

    } catch(err) {
        res.send('error');
        // res.send(err);
    }

});