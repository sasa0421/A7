var data = require("../users.json");

//function _isContains(json, value) {
//    let contains = false;
//    Object.keys(json).some(key => {
//        contains = typeof json[key] === 'object' ? _isContains(json[key], value) : json[key] === value;
//         return contains;
//    });
//    return contains;
// }

exports.auth = function(req, res) {
var login = {"name": req.query.name,
"description": req.query.description};
console.log(login);
res.render('sip', user);
}
// for (i=0; i < data.users.length; i++) {
// 	console.log(data.users[i]);
// 	if (data.users[i].name == login.name && data.users[i].password == login.description) {
// 		data.users[i].isUser = true;
// 		var user = data.users[i];
// 		res.render('sip', user);
// 		break;
// 	}
// 	else if (data.users[i].name == "Test") {
// 		data.users[i].isUser = true;
// 		var user = data.users[i];
// 		res.render('sip', user);
// 		break;
// 	}
// }
// 	res.render('index');
// }

