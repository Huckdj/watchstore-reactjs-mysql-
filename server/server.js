/* eslint-disable no-use-before-define */
import  express  from "express";
import mysql from 'mysql';
import cors from 'cors';
import  jwt  from "jsonwebtoken";
import cookieParser from "cookie-parser"


const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods:["POST", "GET"],
    credentials: true
 }));
 app.use(cookieParser());




const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'watch_store_tanbang'
})


app.get('/watch_detail',(req, res)=>{
    const sql = "SELECT * FROM watch_detail LIMIT 10";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error"})
        return res.json(result);
    })
})

app.get('/watch_detail/:id',(req, res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM watch_detail WHERE id=" + id ;
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error"})
        return res.json(result);
    })
})

app.get('/topsale',(req, res)=>{
    const sql = "SELECT * FROM watch_detail ORDER BY numbersell DESC LIMIT 10";
    db.query(sql,(err,result)=>{
        if(err) {
        console.error(err);
            return res.json({Message: "Error"});
        }
        return res.json(result);
    })
})
app.get('/watchEntire',(req, res)=>{
    const sql = "SELECT * FROM watch_detail";
    db.query(sql,(err,result)=>{
        if(err) return res.json({Message: "Error"})
        return res.json(result);
    })
})

app.post('/register',(req, res)=> {
    const emailcheck = req.body.email;
    const checkEmailDuplicate ="SELECT * FROM users WHERE email = ?";
    db.query(checkEmailDuplicate, [emailcheck],(err, result) => {
        if(err) return console.log(err)
        if(result.length > 0){
            return res.json({Status:"duplicate"})
        }else{
            const sql = "INSERT INTO users (`name`,`email`,`password`) VALUES (?, ?, ?)";
            const values =[
                    req.body.name,
                    req.body.email,
                    req.body.password
                ]
                db.query(sql, values, (err, result) => {
                    if(err) return console.log(err)
                    return res.json({Status: "Success"})
                })
        } 
    })
})
app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) return res.json({Error: "Lỗi hệ thống hãy thử lại"});
        if(data.length > 0){
            
                const name = data[0].name;
                const iduser = data[0].iduser;
                const email = data[0].email;
                const token = jwt.sign({name, iduser, email}, "jwt-secret-key", {expiresIn: '1d'});
                res.cookie('token', token);
                return res.json({Status: "Success"})
        } else {
            return res.json({Error:"Sai tài khoản hoặc mật khẩu"})
        }
    })
})

const verifyUser = (req,res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.json({Error: "You not authen"})
    }else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err){
                return res.json({Error: "Token is not okey"});
            }else {
                req.name = decoded.name;
                req.iduser = decoded.iduser;
                req.email = decoded.email;
                next();
            }
        })
    }
}

app.get('/', verifyUser,(req,res) => {
    return res.json({Status: "Success", name: req.name, iduser: req.iduser, emaill : req.email})
})

app.get('/logout',(req,res) =>{
    res.clearCookie('token');
    return res.json({Status: "Success"})
})

app.get('/infouser/:id',(req, res)=>{
    const id = req.params.id;
    const sql = "SELECT * FROM users WHERE iduser=" + id ;
    db.query(sql,(err,result)=>{
        if(err) {return res.json({Message: "Error"})}
        else{
                return res.json(result);
            }
            })
        }
    )






app.listen(4000 , () => {
  console.log('Server listening on port 4000!');
});