import multer from 'multer';

const upload = multer({
  storage: multer.memoryStorage(), // store in RAM, not disk
});

export const articleUpload = upload.fields([
  { name: 'imageLong', maxCount: 1 },
  { name: 'imageShort', maxCount: 1 }
]);