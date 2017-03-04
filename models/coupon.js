var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CouponSchema = new Schema({
    couponCode: {
        type: String,
        required: true,
        index: {unique: true}
    },
    detail: {type: String}
}, {timestamps: true});

var Coupon= mongoose.model('Coupon', CouponSchema);

module.exports = Coupon;