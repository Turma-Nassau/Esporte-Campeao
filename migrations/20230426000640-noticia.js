'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('noticias'), {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autor: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      descriçao: {
        type: Sequelize.STRING(80),
        allowNull: false, 
      },
      conteudo: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    };
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('noticia');
  }
};
