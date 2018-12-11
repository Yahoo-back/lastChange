'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 电影首页控制器 */
exports.index = function(req, res) {
  res.render('recipes/recipes_index', {
    title: '菜谱首页',
    logo: 'recipes'
  });
};
