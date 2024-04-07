const router = require("express").Router();
const contactService = require("../services/contactService");

router.post('/add', async (req, res) => {
    try {
        const {email, subject, message} = req.body;
        await contactService.create({
            email,
            subject,
            message
        });

        res.status(200).end();
    }catch({message}){
        res.status(400).json({message});
    }
})

module.exports = router;