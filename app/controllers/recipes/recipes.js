'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose'),
  Recipes = mongoose.model('Recipes'), // 电影数据模型
  _ = require('underscore'), // 该模块用来对变化字段进行更新
  fs = require('fs'), // 读写文件模块
  path = require('path');

/* 菜谱后台录入页控制器 --------与views/pages/recipes/recipes_admin相关联*/
exports.new = function(req, res) {
  res.render('recipes/recipes_admin', {
    title: '菜谱后台录入页',
    logo: 'recipes'
  });
};

// 菜谱列表路由
exports.list = function(req, res) {
  res.render('recipes/recipes_list', {
    title: '菜谱列表页',
    logo: 'recipes'
  });
};
