'use strict';

module.exports = (sequelize, DataTypes) => {
  const Email = sequelize.define('Emails', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    folder_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Folders',
        key: 'id'
      }
    },
    subject: {
      type: DataTypes.STRING
    },
    receivedDate: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {});
  Email.associate = function(models) {
    Email.belongsTo(models.Folders, {
      foreignKey: 'folder_id'
    })
  };
  return Email;
};