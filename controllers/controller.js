exports.getdefault = function (req, res) {
    res.send('You are on the root route.');
};
exports.aboutus = function (req, res) {
    res.send('You are on the about us route.');
};
//
exports.addemployee = function (req, res) {
    let empName = req.body.empName;
    let empPass = req.body.empPass;
    res.send(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};