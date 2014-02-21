describe('numberTranslator', function() {
  it('returns the word one when provided the number 1', function () {
    numberTranslator(1).should.equal('one');
  });
  it('returns the word two when provided the number 2', function () {
    numberTranslator(2).should.equal('two');
  })
});
