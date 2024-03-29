# DickJS

Find it on NPM @ https://www.npmjs.com/package/dickjs?activeTab=code

Generate ASCII art of DickJS using the `asciify-image` package.

# Installation

You can install this package via npm:

```bash
npm install dickjs
```

# Usage

# Usage

```js
const generateThingy = require('dickjs');


generateThingy("https://static-00.iconduck.com/assets.00/penis-emoji-2048x2004-mcysxmme.png")
    .then(ascii => console.log(ascii))
    .catch(err => console.error('Error generating ASCII art:', err));
```

# Credits

This package is based on the asciify-image package.

# License

This project is licensed under the MIT License


