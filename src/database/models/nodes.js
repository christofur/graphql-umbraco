const nodes = {
    nodeId: {
        type: Sequelize.INTEGER,
            primaryKey: true
    },
    text:{
        type: Sequelize.STRING
    },
    newest:{
        type: Sequelize.BOOLEAN
    },
    versionId:{
        type: Sequelize.STRING,
            primaryKey: true
    }
};

export default nodes;