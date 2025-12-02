import multer from 'multer'

export const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,filename+'_'+Date.now()+file.originalname)
    }
})