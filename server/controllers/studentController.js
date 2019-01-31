module.exports = {
    getStudents: (req, res, next) => {
        const db = req.app.get("db")
        db.get_all_students().then(students => {
            res.status(200).json(students)
        })
    },
    postStudent: (req, res, next) => {
        const db = req.app.get("db")
        const { name, cohort, campus } = req.body
        db.post_student([name, cohort, campus]).then((students) => {
            res.status(200).json(students)
        }).catch((err) => res.json(err.detail))
    },
    updateStudent: (req, res, next) => {
        const db =req.app.get("db")
        const { student_id, cohort } = req.params;
        db.update_student([student_id, cohort]).then((students) => {
            res.status(200).json(students)
        }).catch((err) => res.json(err.detail))
    },
    deleteStudent: (req, res, next) => {
        const db = req.app.get("db")
        const { student_id } = req.params;
        db.delete_student(student_id).then((students) => {
            res.status(200).json(students)
        }).catch((err) => res.json(err.detail))
    }
}