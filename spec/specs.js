describe('numberTranslator', function() {
  it('returns the word one when provided the number 1', function () {
    numberTranslator('1').should.equal('one');
  });
  it('returns the word two when provided the number 2', function () {
    numberTranslator('2').should.equal('two');
  });
  it('returns the word for any number 1-9', function () {
    numberTranslator('9').should.equal('nine');
  });
  it('returns the word for any number 1-9 and 20-99', function () {
    numberTranslator('21').should.equal('twentyone');
  });
  it('it returns the word for any number 1-9 and 20-999', function() {
    numberTranslator('867').should.equal('eight hundredsixtyseven');
  });
  it('handles 0s as input', function() {
    numberTranslator('000').should.equal('');
  });
  it('returns the correct values for 11-19', function() {
    numberTranslator('17').should.equal('seventeen');
  });
});
