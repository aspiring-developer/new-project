// importing required module from orm.js
const orm = require('../config/orm.js');

// creating burger object
let burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (res) => {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, callback) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      callback(res);
    });
  },
  updateOne: (objColVals, condition, callback) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      callback(res);
    });
  },

  deleteOne: (condition, callback) => {
    orm.deleteOne("burgers", condition, (res) => {
      callback(res);
    });
  },

};

// exporting the module from this page to be imported into another page
module.exports = burger;