'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const todayDate = new Date();
    await queryInterface.bulkInsert('Folders', [{
       name: 'inbox',
       createdAt: todayDate,
       updatedAt: todayDate,
    }, {
        name: 'draft',
        createdAt: todayDate,
       updatedAt: todayDate,
    },{
      name: 'sent',
      createdAt: todayDate,
       updatedAt: todayDate,
    }], {});

    await queryInterface.bulkInsert('Emails', [
      {
        folder_id: 1,
        subject: 'First email',
        receivedDate: '2021-02-10',
        description: 'Fist inbox email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 1,
        subject: 'Second email',
        receivedDate: '2021-02-12',
        description: 'Second inbox email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 1,
        subject: 'Third email',
        receivedDate: '2021-02-24',
        description: 'Third inbox email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 2,
        subject: 'Draft First email',
        receivedDate: '2021-02-10',
        description: 'Fist draft email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 2,
        subject: 'Draft Second email',
        receivedDate: '2021-02-12',
        description: 'Second draft email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 2,
        subject: 'Draft Third email',
        receivedDate: '2021-02-24',
        description: 'Third draft email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 3,
        subject: 'Sent First email',
        receivedDate: '2021-02-10',
        description: 'Fist sent email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 3,
        subject: 'Sent Second email',
        receivedDate: '2021-02-12',
        description: 'Second sent email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      },
      {
        folder_id: 3,
        subject: 'Sent Third email',
        receivedDate: '2021-02-24',
        description: 'Third sent email description',
        createdAt: todayDate,
       updatedAt: todayDate,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Emails', null, {});
    await queryInterface.bulkDelete('Folders', null, {});
  }
};
