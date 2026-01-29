module.exports = (sequelize, DataTypes) => {
  const ClassCategory = sequelize.define(
    "ClassCategory",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name",
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      tableName: "class_categories",
      timestamps: true,
    }
  );

  ClassCategory.associate = function(models) {
    ClassCategory.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });
    ClassCategory.hasMany(models.Class, {
      foreignKey: 'category_id',
      as: 'classes'
    });
  };

  return ClassCategory;
};
