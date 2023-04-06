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

    await queryInterface.bulkInsert("workshops", [
      {
        name: "Introduction to Web 3",
        description: "A beginngers look at NFT and Cryptocurrency",
        full_day: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Advanced SQL",
        description: "Learn SQL queries that will get you a raise",
        full_day: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beautiful designs",
        description: "Frontend Developers polshing class",
        full_day: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Sockets and how to use them",
        description: "A look into developing instantaneous chatrooms",
        full_day: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "JWT and Authentication",
        description: "Learn a new way to validate your users using tokens",
        full_day: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("students_workshops", [
      {
        student_id: 1,
        workshop_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 1,
        workshop_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 2,
        workshop_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 2,
        workshop_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 3,
        workshop_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 4,
        workshop_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 4,
        workshop_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 3,
        workshop_id: 3,
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
    await queryInterface.bulkDelete("students_workshops", null, {});
    await queryInterface.bulkDelete("workshops", null, {});
  },
};
