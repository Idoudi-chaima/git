//valide les données avant de les envoyer au baze de données 
const yup = require("yup");
const studentSchema = yup.object({
    studentName: yup.string().required().min(3),
    studentGrade : yup.number().positive().required(),
});

module.exports = studentSchema;