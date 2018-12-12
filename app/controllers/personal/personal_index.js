'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 个人中心控制器 */
exports.index = function(req, res) {
  res.render('personal/personal_index', {
    title: '个人中心',
    logo: 'personal'
  });
};
