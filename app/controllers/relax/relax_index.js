'use strict';

/* 与首页进行交互 */
var mongoose = require('mongoose');

/* 休闲时光控制器 */
exports.index = function(req, res) {
  res.render('relax/relax_index', {
    title: '休闲时光',
    logo: 'relax'
  });
};
