/** 채용정보 get요청시 전달 */
const { Recruitment } = require('../../models')

module.exports = (req, res) => {
    console.log("🚀 ~ file: updateRecruitment.js:13 ~ req.params.companyId:", req.params.companyId)

    Recruitment.update({
        position: req.body.position,
        compensation: req.body.compensation,
        content: req.body.content,
        stack: req.body.stack,
    }, {
        where: {
            company_id: req.params.companyId,
        }
    }).then((result) => {
        if (!result) {
            res.status(400).json({ message: '내용이 없어요' })
        } else {
            res.json({ message: '채용공고 수정 완료' })
        }
    }).catch((err) => {
        console.log(err)
        res.status(500).json({ message: '서버에 문제가 있네요' })
    })
}