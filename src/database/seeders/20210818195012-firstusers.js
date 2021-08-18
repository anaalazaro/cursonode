'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert(
      "Users",
      [
        {         
          firstName: "Ana",
          lastName: "Lazaro",
          email: "ana@ga.com",
          username:"jojo",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "ASlex",
          lastName: "Laza",
          email: "ale@ga.com",
          username:"joje",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "ana2",
          lastName: "lazaro",
          email: "jaan@ga.com",
          username:"joji",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "alex2",
          lastName: "lazaro",
          email: "ale@ga.com",
          username:"jo",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "andy",
          lastName: "peres",
          email: "abc@ga.com",
          username:"ji",
          password: bcrypt.hashSync('123456', 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
