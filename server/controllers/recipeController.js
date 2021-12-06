/**
 *  GET /
 *  HOMEPAGE
 */

exports.homePage = async(req, res) => {
    res.render('index');
}