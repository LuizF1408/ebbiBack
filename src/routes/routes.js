const expressRouter = require('express').Router();

let User = require('../schemas/userSchema');

expressRouter.get('/',async (req,res) => {
    let users = await User.find()
    if (users.length > 0) {
        res.status(200).json(users)

    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }
    

})
expressRouter.post('/',async (req,res) => {
    let users = req.body
    if (users.length > 0) {
        res.status(200).json(users)

    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }
    

})

module.exports = expressRouter;