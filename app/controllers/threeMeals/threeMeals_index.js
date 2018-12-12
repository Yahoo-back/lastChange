'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 一日三餐控制器 */
exports.index = function(req, res) {
  res.render('threeMeals/threeMeals_index', {
    title: '一日三餐',
    logo: 'threeMeals'
  });
};
