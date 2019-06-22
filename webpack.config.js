const path = require('path');

//webpack.config.js
module.exports = (env) => {
    const environment = env || 'production';

    return {
 //       mode: environment,
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.' + environment + '.bundle.js'
        }
    }   
};