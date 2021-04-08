var supertest = require('supertest');

describe('UserController.store', function() {
  describe('#store()', function() {
    it('Store User', function (done) {
      supertest(sails.hooks.http.app)
      .post('/user')
      .send({ name: 'test', email: 'test@na.com',number :7894561230 })
      .expect(200,done)
    });
  });

  describe('#index()',function() {
    it('Show all Users',function(done) {
      supertest(sails.hooks.http.app)
       .get('/user')
       .expect(200).then(function(res){
        expect(res.body).to.have.property('status',201);
       })
       done()
    })
  })
});
