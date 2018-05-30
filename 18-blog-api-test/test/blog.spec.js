/**
 * https://github.com/mochajs/mocha/wiki
 * https://github.com/mochajs/mocha/wiki/compilers-deprecation
 * mocha needs to transpile es6 so
 * the npm script that runs mocha (npm test)
 * needed to install several modules as devDependencies although they already were in the dependencies 
 * mocha apparently cannot find them relative to the root directory if they are not in devDependencies
 * TODO: look into this--it doesn't make much sense
 * https://github.com/mochajs/mocha/issues/3092
 */
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../index';

const should = chai.should(); // provides shorter syntax than "expect"
const endPoint = '/blog';

// instruct chai to use chai-http
chai.use(chaiHttp);

/** 
* https://mochajs.org/#arrow-functions
* Passing arrow functions (“lambdas”) to Mocha is discouraged. 
* Lambdas lexically bind this and cannot access the Mocha context.
*/

/**
 * https://github.com/chaijs/chai-http
 * When passing an app to request; it will automatically open the server 
 * for incoming requests (by calling listen()) and, once a request has been made 
 * the server will automatically shut down (by calling .close()). 
 * If you want to keep the server open, perhaps if you're making multiple requests, 
 * you must call .keepOpen() after .request(), and manually close the server down
 */
describe('===BLOG API===', function() {
  
  // GET
  describe('/GET blog', function() {
    it('should GET all blog posts', function(done) {
      chai.request(app)
        .get(endPoint)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  // POST
  describe('/POST blog', function() {
    it('should POST a blog post', function(done) {
      // mock a new blog post
      const newblog = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      chai.request(app)
        .post(endPoint)
        .send(newblog)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('author');
          res.body.should.have.property('content');
          res.body.should.have.property('title');
          done();
        });
    });
  }); 

  // GET BLOG BY ID
  describe('/GET/:id blog', function() {
    it('should GET a blog post by ID', function(done) {
      // mock a new blog post
      const newblog = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      // post blog then get it by id
      chai.request(app)
        .post(endPoint)
        .send(newblog)
        .end((err, res) => {

          // get by id
          chai.request(app)
            .get(`${endPoint}\/${res.body.id}`) // need to escape the '/'
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');

              res.body.should.have.property('author');
              res.body.should.have.property('content');
              res.body.should.have.property('title');  

              res.body.id.should.equal(res.body.id);
              res.body.author.should.equal(newblog.author);
              res.body.content.should.equal(newblog.content);
              res.body.title.should.equal(newblog.title);
              done();
            });
        });
    });
  });

  // PUT BLOG 
  describe('/PUT/:id blog', function() {
    it('should UPDATE a blog post', function(done) {
      // mock a new blog post
      const blog = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      const updatedBlog = {
        author: 'John D.', 
        title: 'My New Blog Post', 
        content: 'The truth is I suck at Node...'
      };

      // post blog then update it
      chai.request(app)
        .post(endPoint)
        .send(blog)
        .end((err, res) => {

          // update
          chai.request(app)
            .put(`${endPoint}\/${res.body.id}`) // need to escape the '/'
            .send(Object.assign({}, updatedBlog, {id: res.body.id})) // update method requires the id in the object
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');

              res.body.should.have.property('author');
              res.body.should.have.property('content');
              res.body.should.have.property('title');  

              res.body.id.should.equal(res.body.id);
              res.body.author.should.equal(updatedBlog.author);
              res.body.content.should.equal(updatedBlog.content);
              res.body.title.should.equal(updatedBlog.title);
              done();
            });
        });
    });
  });

  // DELETE BLOG 
  describe('/DELETE/:id blog', function() {
    it('should DELETE a blog post', function(done) {
      // mock a new blog post
      const blog = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      // post blog then delete it
      chai.request(app)
        .post(endPoint)
        .send(blog)
        .end((err, res) => {

          // delete
          chai.request(app)
            .delete(`${endPoint}\/${res.body.id}`) // need to escape the '/'
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.equal('');
              done();
            });
        });
    });
  });

});

