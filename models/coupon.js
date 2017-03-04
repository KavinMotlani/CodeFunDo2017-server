var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CouponSchema = new Schema({
    heading: String,
    category: String,
    description: String,
    expDate: String,
    expTime: String,
    link: String,
    code: String,
    latitude: String,
    longitude: String,
    name: String,
    number: String,
    email: String,
    address: String
}, {timestamps: true});

var Coupon= mongoose.model('Coupon', CouponSchema);

module.exports = Coupon;