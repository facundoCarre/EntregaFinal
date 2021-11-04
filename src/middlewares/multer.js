const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads')
    },
    filename: function (req, file, callback) {
      const ext = file.mimetype.split('/').pop()
      callback(null, `${file.originalname}-${Date.now()}.${ext}`)
    }
  })
const upload = multer({ 
  storage: storage,
  fileFilter: function(_req, file, cb){
    checkFileType(file, cb)
  }
})

function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}

module.exports = upload