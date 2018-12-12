'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.Types.ObjectId;
// 电影数据类型
var RecipesSchema = new Schema({
  recipesName: String, // 菜谱名
  recipesImg: String, // 成品图
  material: String, // 食材
  author: String, // 作者
  time: String, // 时间
  seasoning: String, // 调料
  Introductions: String, // 做法
  category: {
    // 菜谱分类
    type: ObjectId,
    ref: 'Category'
  },
  meta: {
    createAt: {
      // 创建时间
      type: Date,
      default: Date.now()
    },
    updateAt: {
      // 更新时间
      type: Date,
      default: Date.now()
    }
  }
});

// 模式保存前执行下面函数,如果当前数据是新创建，则创建时间和更新时间都是当前时间，否则更新时间是当前时间
RecipesSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

// 静态方法不会与数据库直接交互，需要经过模型编译实例化后才会具有该方法
RecipesSchema.statics = {
  fetch: function(cb) {
    return this.find({})
      .sort('meta.updateAt')
      .exec(cb);
  },
  findById: function(id, cb) {
    return this.findOne({ _id: id }).exec(cb);
  }
};

module.exports = RecipesSchema;
