const multer = require("multer");
const path = require("path");

// Pasta onde as imagens serão salvas
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            return cb(new Error("Apenas imagens JPG, JPEG e PNG são permitidas."), false);
        }
        cb(null, true);
    }
});

module.exports = upload;