'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     
    }
  }
  noticia.init({
    titulo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    descriçao: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    conteudo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        len: [8, 20]
      }
    },
    
  }, {
    sequelize,
    modelName: 'noticia',
  });
  return noticia;
};

//module.exports = Usuario;