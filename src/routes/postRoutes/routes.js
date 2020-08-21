require('../../../database')
const uuid = require ('uuid')
const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json())

const User = require('../../schemas/userSchema');



router.post('/signup',async(req,res)=> {
    const username = req.body.username;
    const toLow = username.toLowerCase()
    const password = req.body.password;
    const user = await User.findOne({username:toLow});
    
    if (user){
        res.status(409).json({message:'Usuário já existente :'})
        return;
    }
  
    const token = uuid.v4()
    const newUser = new User({
        username : toLow,
        password: password,
        token : token,

    });

    newUser.save()
    .then(()=>{
        res.status(201).json({message:'Usuário Cadastrado :'})
    })
    .catch((error)=>{
        res.status(400).json({message: error.message});

    })
})

// const passwordAuthorizated = async (req, res) => {
//     const password = req.header('Password');
//     const user = await User.findOne({ password: password });
//     if (!user) {
//         res.status(401).json({ message: 'Access denied: Invalid password' });
//         return false;
//     };
//     return true;
// };



router.post('/newCard', async (req, res) => {
    // if(!await passwordAuthorizated(req, res)) return
    const newCard = req.body
})

module.exports = router