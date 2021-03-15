const chalk = require('chalk');

const student = require('./information.js');

var cowsay = require("cowsay");



console.log(chalk.yellow(cowsay.say({
	text : `Hi ${student.name} du campus de ${student.campus}`,
	e : "oO",
	T : "U "
})));
