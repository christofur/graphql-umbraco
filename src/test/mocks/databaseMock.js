import Sequelize from 'sequelize';
import _ from 'lodash';
import Config from '../../config/config';
import Properties from '../../database/models/properties';
import PropertyTypes from '../../database/models/propertyTypes';
import Nodes from '../../database/models/nodes';
import ChildNodes from '../../database/models/childNodes';
import Constants from '../../constants/constants'

const databaseMock = {
    models : {
        nodes : {
            findAll : function(){
                return [1,2,3];
            }
        },
        properties: {
            findAll : function(){
                return [1,2,3];
            }
        },
        propertyTypes: {
            findAll : function(){
                return [1,2,3];
            }
        }
    }
};

export default databaseMock;