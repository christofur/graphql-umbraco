import Sequelize from 'sequelize';

const properties = {
    id: {
        type: Sequelize.INTEGER
    },
    contentNodeId: {
        type: Sequelize.INTEGER
    },
    versionId: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    propertyTypeId: {
        type: Sequelize.STRING
    },
    dataInt: {
        type: Sequelize.STRING
    },
    dataDate: {
        type: Sequelize.STRING
    },
    dataNvarchar: {
        type: Sequelize.STRING
    },
    dataNText: {
        type: Sequelize.STRING
    }
};

export default properties;