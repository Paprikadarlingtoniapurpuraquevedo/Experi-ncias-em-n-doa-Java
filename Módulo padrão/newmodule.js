const obj = {
    author: 'Sebastião da Gama',
    title: 'Cabo da Boa Esperança',
    publisher: 'Portugália Editora',
    year: '1947',
    position: function (qual) {
        return this.author + qual + " ";
    },
};
module.exports=obj;