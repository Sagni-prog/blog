
const sequelize = require('./../database/database');
const { Sequelize, DataTypes, Model } = require('sequelize');

class Article extends Model {
    getFullname() {
        return "hello it is me";
      }
}

Article.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize, 
  modelName: 'Article'
});


console.log(Article === sequelize.models.Article); 

// export default {Article};
module.exports = Article;