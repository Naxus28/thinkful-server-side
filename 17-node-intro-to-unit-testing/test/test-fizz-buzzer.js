// http://www.chaijs.com/api/bdd/
const fizzBuzzer = require('../fizzBuzzer');
const expect = require('chai').expect;

describe('fizzBuzzer', function() {
  it('should throw an error because the argument is not a number', function() {
    /* If you need to assert that your function fn throws when passed certain arguments, 
     * then wrap a call to fn inside of another function.
     * .throw([errorLike], [errMsgMatcher], [msg])
     * @param { Error | ErrorConstructor } errorLike
     * @param { String | RegExp } errMsgMatcher error message
     * @param { String } msg _optional_
     */
    expect(() => fizzBuzzer('a')).to.throw();
    expect(() => fizzBuzzer('a')).to.throw(Error);
    expect(() => fizzBuzzer('a')).to.throw(Error, /`num` must be a number/);
  });

  it('should return \'fizz-buzz\'', function() {
    expect(fizzBuzzer(15)).to.equal('fizz-buzz');
  });

  it('should return \'buzz\'', function() {
    const buzzers = [40, 20, 10, 5];

    buzzers.forEach(bz => {
      expect(fizzBuzzer(bz)).to.equal('buzz');
    });
  });

  it('should return \'fizz\'', function() {
    const fizzers = [33, 27, 24, 12];
    
    fizzers.forEach(fz => {
      expect(fizzBuzzer(fz)).to.equal('fizz');
    });
  });

  it('should return the number', function() {
    const nums = [47, 34, 26, 11];
    
    nums.forEach(n => {
      expect(fizzBuzzer(n)).to.equal(n);
    });
  });
});