require('../../../database');
const uuid = require ('uuid');
const express = require('express');
const router = express.Router();

const User = require('../../schemas/userSchema');
const { Deck, Card } = require('../../schemas/dataSchema');

router.post('/signup', async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ username: username });
    
    if (user){
        res.status(409).json({ message:'Usuário já existente' });
        return;
    }
  
    const token = uuid.v4();
    const newUser = new User({
        username : toLow,
        password: password,
        token : token
    });

    newUser.save()
    .then(() => {
        res.status(201).json({ message:'Usuário cadastrado' });
    })
    .catch((error) => {
        res.status(400).json({ message: error.message });
    });
});

router.post('/newCard', async (req, res) => {
    let card = [];
    for (let i = 0; i < req.body.cards.length; i++) {
        card.push(new Card({
            frontSide: req.body.cards[i].front,
            backSide: req.body.cards[i].back
        }));
    }
    const newDeck = new Deck({
        categorie: req.body.categorie,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        cards: card
    });
    try {
        newDeck.save();
        res.status(201).json({ message: 'Card created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router