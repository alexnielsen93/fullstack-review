module.exports ={
  getUsers: (req,res)=>{
    const db = req.app.get('db')
    db.getAllUsers().then((data)=>
    res.status(200).send(data)
    )}


}