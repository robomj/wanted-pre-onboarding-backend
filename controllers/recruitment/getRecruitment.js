/** 채용정보 get요청시 전달 */
const { Recruitment } = require('../../models')

module.exports = (req, res) => {
    Recruitment.findAll().then((result) => {
        result.map((e) => {
            delete e.dataValues.content
            delete e.dataValues.createdAt
            delete e.dataValues.updatedAt
        })
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}