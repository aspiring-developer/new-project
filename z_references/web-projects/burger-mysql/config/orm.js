let connection = require("./connection.js");

// Helper function for SQL syntax. 
// We want to pass 3 values into the mySQL query, so need 3 question marks.
// The helper function below loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string. // ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];

  // loop through the keys and push the key/value as a string into arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // this code block below adds quotation if strings have spaces (e.g. Shiva Sharma to 'Shiva Sharma')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // this code block below converts object into array changing {} to [] and : to = and adds necessary quotation
      // e.g. {name: 'Shiva Sharma'} to ["name='Shiva Sharma'"]  OR  {devoured: true} to ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }
  // this code block below translates array of strings to a single comma-separated string
  return arr.toString();
}

// Object Relational Mapper (ORM)
let orm = {
  // selects all burgers from burgers (table)
  selectAll: (tableName, callback) => {
    let queryString = `SELECT * FROM ${tableName} `;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      console.log(data);
      callback(data);

    });
  },
  // inserts a burger into burgers (table)
  insertOne: (tableName, cols, vals, callback) => {
    let queryString = `INSERT INTO ${tableName} `;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, data) => {
      if (err) {
        throw err;
      }

      callback(data);
    });
  },
  // updates a burger into burgers (table)
  // An example of objColVals would be {name: cheeseburger, devoured: true}
  updateOne: (tableName, objColVals, condition, callback) => {
    let queryString = `UPDATE ${tableName}`;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      }

      callback(data);
    });
  },

  deleteOne: (tableName, condition, callback) => {
    let queryString = "DELETE";

    queryString += ` FROM  ${tableName} `;
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, data) => {
      if (err) {
        throw err;
      }

      callback(data);
    });
  }

};

// exporting the module from this page to be imported into another page
module.exports = orm;


