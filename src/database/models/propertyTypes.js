const propertyTypes = {
    id: {
        type: Sequelize.INTEGER,
            primaryKey: true
    },
    alias:{
        type: Sequelize.STRING
    }
};

export default propertyTypes;