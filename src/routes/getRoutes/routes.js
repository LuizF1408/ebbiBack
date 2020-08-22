require('../../../database')
const express = require('express')
const router = express.Router()

const User = require('../../schemas/userSchema');

router.get('/seeAllUsers', async (req, res) => {
    const users = await User.find()
    if (users.length > 0) {
        res.status(200).json(users)
    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }
})

module.exports = router