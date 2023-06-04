"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(body_parser_1["default"].json());
app.post('/register', function (req, res) {
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    console.log(name, email, password);
    res.set('Access-Control-Allow-Origin', '*');
    res.json({
        status: 'success',
        name: name,
        email: email,
        password: password
    });
});

app.listen(3002, function () {
    console.log('Server listening on port 3002');
});
