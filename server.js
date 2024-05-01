import  express  from "express";
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());

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
app.get('/iduser', (req, res) => {
    const { email, password } = req.query;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ? ";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ Message: "Internal Server Error" });
        }

        if (result.length > 0) {
            // Người dùng hợp lệ
            return res.json({ success: true, message: 'Đăng nhập thành công' });
        } else  {
            // Người dùng không hợp lệ
            return res.status(401).json({ success: false, message: 'Đăng nhập thất bại' });
        }
    });
});

app.listen(4000 , () => {
  console.log('Server listening on port 4000!');
});