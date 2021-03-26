const {
    Vote,
    sequelize
} = require('../models');

const getAll = () =>{
    return Vote.findAll();
}

const addVote = ({name,choice,casted_at}) =>{
    return Vote.create({name,choice,casted_at});
}

const getOne = (uuid) =>{
    return Vote.findOne({
        where: {
            uuid
        },
    });
}

const getDateCount = (choice) => {
    return Vote.findAll({
        attributes : ['casted_at',[sequelize.fn('COUNT','casted_at'),'count']],
        group : ["casted_at"],
        order: ["casted_at"],
        where : {choice}
   });
}

const getChoiceCount = ()=>{
    return Vote.findAll({
        attributes:['choice', [sequelize.fn('COUNT','choice'),'count']],
        group : ['choice']
    });
}

module.exports = {
    getAll,
    addVote,
    getDateCount,
    getOne,
    getChoiceCount
}