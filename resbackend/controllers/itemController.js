const mysql = require("mysql2");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "21092003harshmamgai",
    database: "restaurant_database"
});

function getItems(req, res){
    con.connect((err)=>{
        if(err){
            return res.status(500).json({
                "message": "Unable to connect to database",
                "error": err
            })
        }
        let query = 'select * from menu'; 
        con.query(query, (err, result) => { 
            if(err){
                return res.status(500).json({
                    "message": "Internal server error"
                })
            }
            return res.status(200).json({
                "message": result
            })
        }); 
    })
}

function getAppetizers(req, res){
    let query = ' select * from menu where type = "appetizers" '; 
    con.query(query, (err, result) => { 
        if(err){
            return res.status(500).json({
                "message": "Internal server error"
            })
        }
        return res.status(200).json({
            "message": result
        })
    }); 
}

function getMainCourse(req, res){
    let query = ' select * from menu where type = "main course" '; 
    con.query(query, (err, result) => { 
        if(err){
            return res.status(500).json({
                "message": "Internal server error"
            })
        }
        return res.status(200).json({
            "message": result
        })
    }); 
}

function getDeserts(req, res){
    let query = ' select * from menu where type = "deserts" '; 
    con.query(query, (err, result) => { 
        if(err){
            return res.status(500).json({
                "message": "Internal server error"
            })
        }
        return res.status(200).json({
            "message": result
        })
    }); 
}

function getDrinks(req, res){
    let query = ' select * from menu where type = "drinks" '; 
    con.query(query, (err, result) => { 
        if(err){
            return res.status(500).json({
                "message": "Internal server error"
            })
        }
        return res.status(200).json({
            "message": result
        })
    }); 
}

module.exports = {
    getItems : getItems,
    getAppetizers : getAppetizers,
    getMainCourse : getMainCourse,
    getDeserts : getDeserts,
    getDrinks : getDrinks
}