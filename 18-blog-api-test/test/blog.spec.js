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
describe('Book Api', function() {
  
  // GET
  describe('/GET book', function() {
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
  describe('/POST book', function() {
    it('should POST a blog', function(done) {
      // mock a new blog post
      const newBook = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      chai.request(app)
        .post(endPoint)
        .send(newBook)
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
  describe('/GET/:ID book', function() {
    it('should GET a blog by ID', function(done) {
      // mock a new blog post
      const newBook = {
        author: 'John Doe', 
        title: 'My Blog Post', 
        content: 'I love Node...'
      };

      // post blog then get it by id
      chai.request(app)
        .post(endPoint)
        .send(newBook)
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

              res.body.author.should.equal(newBook.author);
              res.body.content.should.equal(newBook.content);
              res.body.title.should.equal(newBook.title);
              done();
            });
        });
    });
  });




});



