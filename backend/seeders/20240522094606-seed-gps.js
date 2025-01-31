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
    await queryInterface.bulkInsert("gps", [
      {
        device_id: "D-1567",
        device_type: "Aircraft",
        timestamp: "2022-08-31 10:05:00",
        location: "L1",
      },
      {
        device_id: "D-1567",
        device_type: "Aircraft",
        timestamp: "2022-08-31 10:10:00",
        location: "L1",
      },
      {
        device_id: "D-1567",
        device_type: "Aircraft",
        timestamp: "2022-08-31 10:15:00",
        location: "L1",
      },
      {
        device_id: "D-1567",
        device_type: "Aircraft",
        timestamp: "2022-08-31 10:20:00",
        location: "L1",
      },
      {
        device_id: "D-1567",
        device_type: "Aircraft",
        timestamp: "2022-08-31 10:25:00",
        location: "L2",
      },
      {
        device_id: "D-1568",
        device_type: "Personal",
        timestamp: "2022-08-31 10:05:00",
        location: "L3",
      },
      {
        device_id: "D-1568",
        device_type: "Personal",
        timestamp: "2022-08-31 10:10:00",
        location: "L3",
      },
      {
        device_id: "D-1568",
        device_type: "Personal",
        timestamp: "2022-08-31 10:15:00",
        location: "L3",
      },
      {
        device_id: "D-1568",
        device_type: "Personal",
        timestamp: "2022-08-31 10:20:00",
        location: "L3",
      },
      {
        device_id: "D-1568",
        device_type: "Personal",
        timestamp: "2022-08-31 10:25:00",
        location: "L3",
      },
      {
        device_id: "D-1569",
        device_type: "Asset",
        timestamp: "2022-08-31 10:15:00",
        location: "L4",
      },
      {
        device_id: "D-1569",
        device_type: "Asset",
        timestamp: "2022-08-31 10:20:00",
        location: "L4",
      },
      {
        device_id: "D-1569",
        device_type: "Asset",
        timestamp: "2022-08-31 10:25:00",
        location: "L1",
      },
      {
        device_id: "D-1569",
        device_type: "Asset",
        timestamp: "2022-08-31 10:30:00",
        location: "L1",
      },
      {
        device_id: "D-1569",
        device_type: "Asset",
        timestamp: "2022-08-31 10:35:00",
        location: "L2",
      },
      {
        device_id: "D-1570",
        device_type: "Personal",
        timestamp: "2022-08-31 10:35:00",
        location: "L5",
      },
      {
        device_id: "D-1571",
        device_type: "Asset",
        timestamp: "2022-08-31 10:35:00",
        location: "L6",
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
    await queryInterface.bulkDelete("gps", null, {});
  },
};
