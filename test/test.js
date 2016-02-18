var chai = require('chai');
var expect = chai.expect;
var BatchedMarkdown = require('../lib/batched-markdown');

describe('parseFile Tests', function() {

    it('returns parsed markdown from a file', function() {
        return BatchedMarkdown.parseFile(__dirname + '/md/markdown1.md').then(function(result) {
            expect(result).to.equal('<h1 id="heading">Heading</h1>\n');
        });
    });

    it('throws an error when a file doesn\'t exist', function() {
        return BatchedMarkdown.parseFile(__dirname + '/md/markdown0.md').then(function(result){
            //
        }, function(err) {
            expect(err.code).to.equal('ENOENT');
        });
    });

});
