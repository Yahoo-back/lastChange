'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 健康资讯控制器 */
exports.index = function(req, res) {
  res.render('healthyNews/healthyNews_index', {
    title: '健康资讯',
    logo: 'healthyNews'
  });
};
