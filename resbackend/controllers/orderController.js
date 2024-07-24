const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "21092003harshmamgai",
    database: "restaurant_database"
});

function placeOrder(req, res){
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const address = req.body.address;
    const item = req.body.item;
    const total = req.body.total;
    if(name==="" || phone==="" || email==="" || address===""){
        return res.status(200).json({
            message: "Please fill all the details"
        })
    }
    if(item==="" || total===0){
        return res.status(200).json({
            message: "Please add items to your cart"
        })
    }

    con.connect(function(err) {
        if(err){
            res.status(500).json({
                message : "Cannot connect to the database"
            });
        }
        const sql = `insert into orders (name, phone, email, address, item, total) values ('${name}', '${phone}', '${email}', '${address}', '${item}', ${total})`;
        con.query(sql, function (err, result) {
          if(err){
            res.status(500).json({
                message : "Internal server error"
            });
          }
          else{
            res.status(200).json({
                message : "Order received successfully",
            });
          }
        });
    });
}
module.exports = {
    placeOrder : placeOrder
}