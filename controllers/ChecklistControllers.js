const { Checklist } = require('../models')

class ChecklistController {

    static showAll(req, res) {
        Checklist.findAll()
        .then((data) => {
            res.status(200).json({
                data
            })
        })
        .catch(() => {
            res.status(500).json({
                status: 500,
                error: 'Server Error'
            })
        })

    }

    static create (req, res) {
        const input = req.body
        Checklist.create(input)
        .then((data) => {
            res.status(200).json({
               data
            })
        })
        .catch(() => {
            res.status(500).json({
                status: 500,
                error: 'Server Error'
            })
        })
    }

    static showOne (req, res) {
        const { checklistId } = req.params
        Checklist.findOne({
            where: {
                id: checklistId
            }
        })
        .then((data) => {
            res.status(200).json({
                data
            })
        })
        .catch(() => {
            res.status(500).json({
                status: 500,
                error: 'Server Error'
            })
        })
    }
    
    static update (req, res) {
        const { checklistId } = req.params
        const input = req.body
        Checklist.update(
            {input}, 
            {
            where: {
                id: checklistId
            }, returning : true
        })
        .then((data) => {
            res.status(200).json({
                data
            })
        })
        .catch(() => {
            res.status(500).json({
                status: 500,
                error: 'Server Error'
            })
        })
    }

    static delete (req, res) {
        const { checklistId } = req.params
        Checklist.destroy({
            where: {
                id: checklistId
            }
        })
        .then(() => {
            res.status(200).json({
                message: 'Data has been deleted'
            })
        })
        .catch(() => {
            res.status(500).json({
                status: 500,
                error: 'Server Error'
            })
        })
        
    }

}

module.exports = ChecklistController