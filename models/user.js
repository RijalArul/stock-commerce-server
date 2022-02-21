'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Email must be required'
          },
          notEmpty: {
            msg: 'Email must be required'
          },
          isEmail: {
            msg: 'Format must be an email'
          }
        },
        unique: {
          args: true,
          msg: 'Email address already exists'
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Minimal Password required 5-12 Character'
          },
          notEmpty: {
            msg: 'Minimal Password required 5-12 Character'
          },
          len: {
            args: [5, 12],
            msg: 'Minimal Password required 5-12 Character'
          }
        }
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Full name must be required'
          },
          notEmpty: {
            msg: 'Full name must be required'
          }
        }
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Role must be required'
          },
          notEmpty: {
            msg: 'Role must be required'
          }
        }
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Phone Number must be required'
          },
          notEmpty: {
            msg: 'Phone Number must be required'
          }
        }
      }
    },
    {
      sequelize,
      modelName: 'User'
    }
  )
  return User
}
