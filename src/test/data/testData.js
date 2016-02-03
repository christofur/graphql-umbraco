import _ from 'lodash';

export const nodes = (function(){
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
                        return properties;
                    }
                }
            },
            getChildNodes: function(){
                return {
                    then: function(){
                        return nodes;
                    }
                }
            }
        });
    });
    return data;
})();


export const properties = (function(){

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
})();

export const propertyTypes = (function(){
    return [];
})();