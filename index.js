const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const controllers = require('./controllers')
const db = require('./models');

db.sequelize.sync()
    .then(() => {
        console.log('db 연결 확인');
    })
    .catch((err) => {
        console.log(err);
        console.log('db 연결 에러 발생!');
    })

app.use(express.urlencoded({ extended: false })); /** 클라이언트 body 해석 위함 */
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.get('/recruitment', controllers.getAllRecruitments) /** 모든 채용공고 얻기 */
app.get('/recruitment/one/:companyId', controllers.getAllRecruitments) /** 채용공고 하나 얻기 */
app.post('/recruitment', controllers.postRecruitments) /** 채용공고 생성 */
app.delete('/recruitment/:companyId', controllers.deleteRecruitments) /** 채용공고 삭제 */
app.patch('/recruitment/:companyId', controllers.updateRecruitments) /** 채용공고 수정 */

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});