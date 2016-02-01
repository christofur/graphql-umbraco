import Sequelize from 'sequelize';

const childNodes =
    {
        id: {
            type: Sequelize.INTEGER,
                primaryKey: true
        },
        parentId: {
            type: Sequelize.INTEGER
        },
        text:{
            type: Sequelize.STRING
        },
        sortOrder:{
            type: Sequelize.INTEGER
        }
    };


export default childNodes;