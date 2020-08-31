import { Model } from "sequelize"

export class PageView extends Model {
  static init(sequelize, DataTypes) {
    super.init({
      counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      }
    },
    // options
    {
      // need to pass the connection instance
      sequelize,
  
      // model name
      modelName: "PageView",
  
      // define the table name
      tableName: 'pageviews',
  
      // if true, add timestamps to table (updatedAt, createdAt)
      timestamps: false,
  
      // if true, doesn't delete rows, instead adds a deletedAt column, if timestamps is true
      paranoid: false,
  
      // if true, uses snake_case instead of camelCase to generated attributes
      // ex: created_at instead of createdAt
      underscored: true,
  
      // hooks
      hooks: {
        // beforeCreate: (user, options) => user.id = uuid()
      }
    })
  }

  static associate(models) {
  }
}

export const PageViewModel = PageView
export default PageView
