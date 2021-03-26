const router = require('express').Router();
const voteController = require("../controllers/vote.controller");
const {formatData} = require('../helper');

router.post("/vote", async (req, res) => {
    const {
        name,
        choice,
        casted_at
    } = req.body;
    try {
        const vote = await voteController.addVote({name,choice,casted_at});
        return res.json(vote);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500).json(err);
    }

});

router.get("/data", async (req, res) => {
    try {
        const votes = await voteController.getAll();
        return res.json(votes);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500).json(err);
    }
});

router.get("/data/:id", async (req, res) => {
    const uuid = req.params.id;
    console.log(uuid);
    try {
        const vote = await getOne(uuid);
        return res.json(vote);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500).json(err);
    }
});

router.get("/choice/:choice?", async(req,res)=>{
    const choice = req.params.choice? req.params.choice : null;
    try{
        if(choice){
            const votes =await voteController.getDateCount(choice);
            res.json(votes);    
        }else{
            const yesData = await voteController.getDateCount(true);
            const NoData = await voteController.getDateCount(false);
            const data = formatData(yesData,NoData);
            res.json(data);
        }
    }catch(err){
        console.log(err);
        return res.sendStatus(500).json(err);
    }
});


router.get("/result/:formated?", async(req,res)=>{
    try {
        const votes = await voteController.getChoiceCount();
        if(!req.params.formated){
            res.json(votes);
        }else{
            const initial = [{choice:"true",count:0},{choice:"false",count:0}]
            let formatedVotes;
            if(votes.length == 0) {
                formatedVotes=initial;
                res.json(formatedVotes);
            }
            else if(votes.length == 1){
                let formatedVotes = [votes[0].dataValues];
                if(formatedVotes[0].choice === true) formatedVotes.push(initial[1]);
                else formatedVotes.push(initial[0]);
                res.json(formatedVotes);
            }
            else if(votes.length == 2) return res.json(votes);
            res.json(formatedVotes);
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json(error);
    }
})

module.exports = router;