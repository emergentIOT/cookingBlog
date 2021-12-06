/**
 *  GET /
 *  HOMEPAGE
 */

exports.homePage = async(req, res) => {
    res.render('index', { title: 'Cooking blog - Home'});
}