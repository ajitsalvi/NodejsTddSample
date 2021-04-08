/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const axios = require('axios');

module.exports = {
  index: async function (req,res) {
    users = await User.find().populate('books')
    data = await axios.get('https://ifconfig.me')

    res.json({
      status: 200,
      message: "success",
      ip: data.data,
      data: users
    })
  }
};

