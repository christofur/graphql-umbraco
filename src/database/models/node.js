import Sequelize from 'sequelize';

const node = {
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

export default node;