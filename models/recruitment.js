module.exports = function (sequelize, DataTypes) {
    const recruitment = sequelize.define('Recruitment', {
        company_id: {
            field: 'company_id', type: DataTypes.STRING(50), unique: true
        },
        company: {
            field: 'company', type: DataTypes.STRING(50)
        },
        nation: {
            field: 'nation', type: DataTypes.STRING(10), default: '한국'
        },
        area: {
            field: 'area', type: DataTypes.STRING(10), default: '서울'
        },
        position: {
            field: 'position', type: DataTypes.STRING(10)
        },
        compensation: {
            field: 'compensation', type: DataTypes.INTEGER(10)
        },
        content: {
            field: 'content', type: DataTypes.STRING(300)
        },
        stack: {
            field: 'stack', type: DataTypes.STRING(30)
        },
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'recruitment'
    });

    return recruitment;
};