import Sequelize from 'sequelize';

const propertyType = {
    id: {
        type: Sequelize.INTEGER,
            primaryKey: true
    },
    alias:{
        type: Sequelize.STRING
    }
};

export default propertyType;