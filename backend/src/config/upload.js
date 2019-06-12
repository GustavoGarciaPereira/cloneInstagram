const multer = require('multer')
const path = require('path')


module.exports = {
    storege: new multer.diskStorage({
        destination: path.resolve(__dirname, ),
        
    })
}