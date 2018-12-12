'use strict';

var mongoose = require('mongoose'),
  RecipesSchema = require('../../schemas/recipes/recipes');

// 使用mongoose的模型方法编译生成模型
var Recipes = mongoose.model('Recipes', RecipesSchema);

// 将模型构造函数导出
module.exports = Recipes;
