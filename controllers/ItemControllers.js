const { Checklist, Item, Template } = require('../models')

class ItemController {

    static showAll(req, res) {
        Item.findAll()
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
        Item.create(input)
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
        const { itemId } = req.params
        Item.findOne({
            where: {
                id: itemId
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
        const { itemId } = req.params
        const input = req.body
        Item.update(
            {input}, 
            {
            where: {
                id: itemId
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
        const { itemId } = req.params
        Item.destroy({
            where: {
                id: itemId
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

module.exports = ItemController