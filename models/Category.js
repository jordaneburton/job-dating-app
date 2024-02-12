Category.init(
    {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      categoy_id: {
        type: DataTypes.INTEGER,
        references :{
          model: "category",
          key : "id"
        },
      },
      // define columns
      desciption: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      title:{
        type: DataTypes.DECIMAL,
        allowNull:false,
      },
      location: {
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

  },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'product',
    },
  
  
  );
  
  module.exports = Category;