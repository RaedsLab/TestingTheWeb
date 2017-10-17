describe('pow', function() {

  describe('raises x to power n', function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        expect(pow(x, 3)).to.equal(expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it('if n is negative, the result is NaN', function() {
	expect(pow(2, -1)).to.be.NaN;
  });

  it('if n is not integer, the result is NaN', function() {
	expect(pow(2, 1.5)).to.be.NaN;
  });

});