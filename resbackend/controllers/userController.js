const mysql = require("mysql2");
const jwt = require("jsonwebtoken");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "21092003harshmamgai",
    database: "restaurant_database"
});
  
function signUp(req, res){
    const data = {
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
    }
    con.connect(function(err){
      if(err){
        return res.status(500).json({
          message : "Cannot connect to database"
        })
      }
      let query = `insert into user (name, email, password) values ('${data.name}', '${data.email}', '${data.password}')`;
      con.query(query, function (err, result) {
        if(err){
          return res.status(500).json({
            message : "Internal server error",
            error : err
          })
        }
        return res.status(200).json({
          message : "User account created successfully!!"
        })
      });
    });
}

function login(req, res){
  const password = req.body.password;
  const email = req.body.email;
  if(email == "" || password == ""){
    return res.status(200).json({
      message : "Email and password are required"
    })
  }

  const query = `select * from user where email = '${email}'`;
  con.query(query, function (err, result) {
    if(err){
      return res.status(500).json({
        message : "Internal server error",
        error : err
      })
    }
    if(result.length > 0){
      if(password !== result[0].password){
        return res.status(200).json({
          message : "Incorrect Password"
        })
      }
      else{
        const token = jwt.sign({
          useremail: result.email,
          userpassword: result.password}, "secret", function(err, token){
          res.status(200).json({
              message: "User Loged in successfully !",
              token: token
          });
        });
      }   
    }
    else{
      return res.status(200).json({
        message : "Email do not matches"
      })
    }
  });
}

module.exports = {
    signUp : signUp,
    login : login
}