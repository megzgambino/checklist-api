const { Checklist, Item, Template } = require("../models");

class TemplateController {
  static showAll(req, res) {
    Template.findAll({
      include: [
        {
          model: Item,
        },
        {
          model: Checklist,
        },
      ],
    })
      .then((data) => {
        res.status(200).json({
          data
        })
      })
      .catch(() => {
        res.status(500).json({
          status: 500,
          error: "Server Error",
        })
      })
  }

  static create(req, res) {
    const input = req.body
    Template.create(input)
      .then((data) => {
        res.status(200).json({
          data,
        })
      })
      .catch(() => {
        res.status(500).json({
          status: 500,
          error: "Server Error",
        })
      })
  }

  static showOne() {

  }

  static update(req, res) {
    const { templateId } = req.params
        const input = req.body
        Template.update(
            {input}, 
            {
            where: {
                id: templateId
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

  static delete(req, res) {
    const { templateId } = req.params
        Template.destroy({
            where: {
                id: templateId
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

module.exports = TemplateController;
