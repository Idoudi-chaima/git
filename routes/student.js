const express = require("express");
const router = express.Router();
const Student= require("../models/student");
const validateMW = require("../middleware/validateMW");
const etudiantSchema = require("../validators/EtudiantSchema");

router.get("/", async (req,res,next)=>{
  const etudiants = await etudiantSchema.find();
  res.json(etudiants);
});

router.post('/add',validateMW(etudiantSchema) ,async(req,res,next)=>{
    const etudiant = new etudiant(
        {nom: req.body.etudiantnom,
        class: req.body.studentGrade,}
    );
    await student.save();

    res.json({message:"student added"});

});

router.put('/update/:id', validateMW(studentShema), async (req, res, next) => {
    try {
      const student = await Student.findByIdAndUpdate(
        req.params.id,
        {
          FullName: req.body.studentName,
          Grade: req.body.studentGrade,
        },
        { new: true }
      );
      res.json({ message: 'student updated', student });
    } catch (error) {
      next(error);
    }
  });
  router.delete("/delete/:id", async (req, res, next) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: "Étudiant non trouvé" });
        }
        return res.json({ message: "student deleted" });
    } catch (error) {
        console.error("eroorrrr :", error);
        return res.status(500).json({ message: "eroor tooo" });
    }
});

router.get("/findByName/:name", async (req, res, next) => {
    try {
        const students = await Student.find({ FullName: req.params.name });

        if (!students || students.length === 0) {
            return res.status(404).json({ message: "Aucun étudiant trouvé avec ce nom" });
        }

        return res.status(200).json({ students });
    } catch (error) {
        console.error("erroooo:", error);
        return res.status(500).json({ message: "eroooorrr" });
    }
});





module.exports = router;