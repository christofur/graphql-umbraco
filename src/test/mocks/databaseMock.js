import Sequelize from 'sequelize';
import _ from 'lodash';
import Config from '../../config/config';
import Properties from '../../database/models/property';
import PropertyTypes from '../../database/models/propertyType';
import Nodes from '../../database/models/node';
import ChildNodes from '../../database/models/childNode';
import Constants from '../../constants/constants'

const databaseMock = {
    models : {
        nodes : {
            findAll : function(){
                let data = [];
                let i = 0;
                _.times(5, () => {
                    data.push({
                        nodeId: ++i,
                        text: 'Fruits of the world',
                        newest: true,
                        versionId: (12345 * i),
                        getProperties: function(){
                            return {
                                then: function(){
                                    return databaseMock.models.properties.findAll();
                                }
                            }
                        },
                        getChildNodes: function(){
                            return {
                                then: function(){
                                    return databaseMock.models.nodes.findAll();
                                }
                            }
                        }
                    });
                });
                return data;
            }
        },
        properties: {
            findAll : function(){

                let data = [];
                _.times(5, () => {

                        data.push({
                            value: function(){
                              return {
                                  dataNtext: 'Apple'
                              }
                            },
                            key: 'Type of fruit',
                            getPropertyType: function(){
                                return {
                                    then: function(){
                                        return 'Picker';
                                    }
                                }
                            }
                    });
                });
                return data;
            }
        },
        propertyTypes: {
            findAll : function(){
                return [];
            }
        }
    }
};

export default databaseMock;