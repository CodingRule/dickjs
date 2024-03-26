# DickJS

Find it on NPM @ https://www.npmjs.com/package/dickjs?activeTab=code

Generate ASCII art of DickJS using the `asciify-image` package.

# Installation

You can install this package via npm:

```bash
npm install dickjs
```

# Usage

```js
const generateThingy = require('dickjs');

generateThingy()
    .then(ascii => console.log(ascii))
    .catch(err => console.error('Error generating nerd face:', err));
```

# Credits

This package is based on the asciify-image package.

# License

This project is licensed under the MIT License
