# batched-markdown
Batch request markdown files in the file system, and parse them using marked.

## Installation
```
$ npm install batched-markdown
```

## Usage

#### parseFile
*returns a Promise object*

```
var BatchedMarkdown = require('batched-markdown');
var path = "/docs/markdown_file.md";

BatchedMarkdown.parseFile(path)
    .then(function(result) {
        //result contains an html string
    })
    .catch(function(err) {
        //fs or markedjs error
    });
```

#### parseFiles
*returns a Promise object*

```
var BatchedMarkdown = require('batched-markdown');
var paths = ["/docs/markdown_file1.md",
            "/docs/markdown_file1.md"];

BatchedMarkdown.parseFiles(paths)
    .then(function(result) {
        //result contains an array of html strings
    })
    .catch(function(err) {
        //fs or markedjs error from any of the files
    });
```

## Future Enhancements
- Ability to pass through a markedjs configuration object
- Ability to pull markdown from a API(s) rather than the filesystem
