const bcrypt = require('bcryptjs')

module.exports ={
  getUsers: (req,res)=>{
    const db = req.app.get('db')
    db.getAllUsers().then((data)=>
    res.status(200).send(data)
    )},

    register: async(req, res)=>{
      const db = req.app.get('db')
      const {email, firstname, lastname, username, password} = req.body
      const { session } = req
      let emailTaken = await(db.checkEmail({email}))
      emailTaken = +emailTaken[0].count
      if (emailTaken !=0){
        return res.sendStatus(409)
      }
      const salt = bcrypt.genSaltSync(10)
      //hashing a character is randomizing a password
      //salt(2) is 2 rounds of randomization
      const hash = bcrypt.hashSync(password, salt)      
    },




}