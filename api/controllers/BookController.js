/**
 * BookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  store: async function(req,res) {
    const params = req.validate({
      'name': 'string',
      'user': 'string',
    }, async (err, params) => {
        if (err) {
          res.json({error:err.message,status:422,invalid:err.invalid})
        } else {
          book = await Book.create(req.body);
          res.json({body:book})
        }
    });
  }
};

