require('../../../database')
const express = require('express')
const router = express.Router()

const User = require('../../models/userSchema');
const { Deck }= require('../../models/dataSchema')

router.get('/seeAllUsers', async (req, res) => {
    const users = await User.find()
    if (users.length > 0) {
        res.status(200).json(users)
    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }
})

router.get('/seeAllDecks', async (req, res) => {
    const decks = await Deck.find()
    if(decks.length > 0) {
        res.status(200).json(decks)
    }
    else {
        res.status(404).json({ message: 'Nenhum dado encontrado' })
    }
})

module.exports = router