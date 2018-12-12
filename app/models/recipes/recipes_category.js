'use strict';

var mongoose = require('mongoose'),
  CategorySchema = require('../../schemas/recipes/recipes_category');

// 使用mongoose的模型方法编译生成模型
var RecipesCategory = mongoose.model('RecipesCategory', CategorySchema);

// 将模型构造函数导出
module.exports = RecipesCategory;
