'use strict';

var marked = require('marked');
var fs = require('fs');

var BatchedMarkdown = {
    /*
    parseFile
        input: path to markdown file
        returns: a promise containing either markdown as an html string or an error
    */
    parseFile: function(path) {

        var parsePromise = new Promise(function(resolve, reject) {
            if (!path) {
                reject(new Error('No path to MD file specified'));
            }

            fs.readFile(path, 'utf8', function(err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(marked(data, function(err, content) {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(content);
                        }
                    }));
                }
            });
        });

        return parsePromise;
    },
    /*
    parseFiles
        input: array object containing paths to multiple markdown files
        returns: a promise containing either all markdown as an html string or an error
    */
    parseFiles: function(paths) {
        const self = this;

        var promisePaths = new Array();
        paths.forEach(function(path) {
            promisePaths.push(self.parseFile(path));
        });

        return Promise.all(promisePaths);
    }

};

if (typeof module !== 'undefined') {
    module.exports = BatchedMarkdown;
}
