var util = require('util');

describe('User (model)', function() {
  describe('#findOne()', function() {
    it('should return One User', function (done) {
      User.find().limit(1)
      .then(function(user) {
        return done();
      })
      .catch(done);
    });
  });

});
