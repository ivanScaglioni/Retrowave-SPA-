import path from 'path';


module.exports = {
    entry: './front-src/main.ts',
    outpus:{
        path: path.join('..','..','/backend/back-src/dist'),
        filename: 'app.bundle.js'
    }

}