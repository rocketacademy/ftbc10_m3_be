"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("students_addresses", [
      {
        student_id: 2,
        address: "Discovery Island 1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 3,
        address: "Novena Somewhere",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 4,
        address: "Woodlands",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 5,
        address: "Bedok",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("students_adderss", null, {});
  },
};
