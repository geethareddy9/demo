'use strict';

module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define('Folders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
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
  Folder.associate = function(models) {
    Folder.hasMany(models.Emails, {
      foreignKey: 'folder_id'
    });
  };
  
  return Folder;
};