const fs = require('fs');
const path = require('path');
const rp = require('required-path');

const PAGES = './src/pages';

module.exports = {
    entry: () => {
        return [].concat(fs.readdirSync(PAGES)).reduce((acc, el) => {
            const entryName = el === 'index.js' ? 'main ' : el.split('.')[0];
            const entryPath = rp(path.join(PAGES, el));

            return {
                [entryName]: entryPath,
                ...acc
            };
        }, {});
    }
};