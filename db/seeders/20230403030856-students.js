"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("students", [
      {
        first_name: "Sam",
        last_name: "O",
        gender: true,
        course: "Full Time Bootcamp",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Ivan",
        last_name: "Khor",
        gender: true,
        course: "Full Time Bootcamp",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Caleb",
        last_name: "Castro",
        gender: true,
        course: "Part Time Bootcamp",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        first_name: "Alayne",
        last_name: "Loo",
        gender: false,
        course: "Part Time Bootcamp",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("students", null, {});
  },
};
