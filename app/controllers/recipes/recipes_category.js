'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose'),
  RecipesCategory = mongoose.model('RecipesCategory'); // 菜谱分类模型

/* 菜谱分类后台录入页控制器 --------与views/pages/recipes/recipes_category_admin相关联*/

exports.new = function(req, res) {
  res.render('recipes/recipes_category_admin', {
    title: '菜谱分类录入页',
    logo: 'recipes'
  });
}; // 电影分类控制器
exports.list = function(req, res) {
  res.render('recipes/recipes_category_list', {
    title: '菜谱分类列表页',
    logo: 'recipes'
  });
};
