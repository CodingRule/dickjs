const asciify = require('asciify-image');

async function generateThingy() {
    const imageUrl = "https://static-00.iconduck.com/assets.00/penis-emoji-2048x2004-mcysxmme.png";
    const options = {
        fit: 'box',
        width: 20, 
        height: 20, 
        color: false 
    };

    return new Promise((resolve, reject) => {
        asciify(imageUrl, options, (err, asciified) => {
            if (err) {
                reject(err);
            } else {
                resolve(asciified);
            }
        });
    });
}

module.exports = generateThingy;
