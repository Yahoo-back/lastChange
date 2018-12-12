'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 美食专栏控制器 */
exports.index = function(req, res) {
  res.render('foodIntro/foodIntro_index', {
    title: '美食专栏',
    logo: 'foodIntro'
  });
};
