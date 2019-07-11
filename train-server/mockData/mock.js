module.exports = {
  'GET /rest/cities': require('./rest/cities.json'),
  'GET /rest/search'(req, res) {
    const { key } = req.query;
    return res.json({
        result: [{
            key: '芜湖',
            display: '芜湖'
        }, {
            key: '井冈山',
            display: '井冈山',
        }, {
            key: '铁岭',
            display: '铁岭',
        }],
        searchKey: key,
    });
  },
}