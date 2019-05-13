if (typeof describe === 'function') {

    describe('#pigLatin()', () => {
      it('should translate a simple word', () => {
        assert.equal(pigLatin('car'), 'arcay');
        assert.equal(pigLatin('dog'), 'ogday');
      });
      it('should translate a complex word', () => {
        assert.equal(pigLatin('create'), 'eatecray');
        assert.equal(pigLatin('valley'), 'alleyvay');
      });
      it('should attach "yay" if word begins with vowel', () => {
        assert.equal(pigLatin('egg'), 'eggyay');
        assert.equal(pigLatin('emission'), 'emissionyay');
      });
      it('should lowercase and trim word before translation', () => {
        assert.equal(pigLatin('HeLlO '), 'ellohay');
        assert.equal(pigLatin(' RoCkEt'), 'ocketray');
      });
    });
  } else {
  
    getPrompt();