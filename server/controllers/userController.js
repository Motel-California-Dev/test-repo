const db = require('../db');

exports.create = () => {
  console.log("Post!");
  db.query("CREATE TABLE IF NOT EXISTS \"user\"(id INT NOT NULL, name VARCHAR(255))")
    .then(() => {
      db.query("INSERT INTO \"user\" (id, name) VALUES (1, 'bob');")
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log("ERROR in creatin table");
      console.log(err);
    });
};

exports.list = () => {
  db.query('SELECT * FROM "user"')
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
};

