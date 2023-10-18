/** 채용정보 get요청시 전달 */
const { Recruitment } = require('../../models')

module.exports = (req, res) => {
    Recruitment.findOne({
        where: {
            company_id: req.params.companyId
        }
    }).then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}