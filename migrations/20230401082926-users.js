'use strict';

  {import('sequelize-cli').Migration} 
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Person',
    {
      id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      name: {
         type: Sequelize.DataTypes.STRING,
         allowNull: false
      },
     email: {
         type: Sequelize.DataTypes.STRING,
         allowNull: false,
         unique: true
      },
      password: {
         type: Sequelize.DataTypes.STRING,
         allowNull: false
      },
      role: {
         type: Sequelize.DataTypes.STRING,
         deletedAt: 'user'
      },
      isActive: {
         type: Sequelize.DataTypes.BOOLEAN,
         defaultValue: false
      },
      passwordResetToken: DataTypes.STRING,
      passwordResetTokenExpiresAt: Sequelize.DataTypes.DATE,
      passworsChangedAt: Sequelize.DataTypes.DATE,
      deletedAt: Sequelize.DataTypes.DATE
 })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
