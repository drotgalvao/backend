const Coupon = require("../models/couponModel");
const validadeMongoDbId = require("../utils/validateMongoDbId");
const asyncHandler = require("express-async-handler");

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.status(201).json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllCoupons = asyncHandler(async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        throw new Error(error);
    }
});

const getCoupon = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        validadeMongoDbId(id);
        const coupon = await Coupon.findById(id);
        res.status(200).json(coupon);
    } catch (error) {
        throw new Error(error);
    }
});

const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validadeMongoDbId(id);
    try {
        const coupons = await Coupon.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(coupons);
    } catch (error) {
        throw new Error(error);
    }
    
});

const deleteCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validadeMongoDbId(id);
    try {
        const coupons = await Coupon.findByIdAndDelete(id);
        res.status(200).json(coupons);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createCoupon, getAllCoupons, getCoupon, updateCoupon, deleteCoupon };
