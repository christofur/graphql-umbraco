const nodes = (function(){
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
})();

export default nodes;


