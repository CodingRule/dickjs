const asciify = require('asciify-image');

async function generateThingy(imageUrl) {
    const options = { fit: 'box', width: 20, height: 20, color: false };

    try {
        return await new Promise((resolve, reject) => {
            asciify(imageUrl, options, (err, asciified) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(asciified);
                }
            });
        });
    } catch (error) {
        throw error;
    }
}

module.exports = generateThingy;
