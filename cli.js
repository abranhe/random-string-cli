#!/usr/bin/env node
'use strict';
const meow = require('meow');
const randomStr = require('r4nd0mstr1ng');

const cli = meow(`
	Examples
	  $ r4nd0mstr1ng
	    HH9ICHiBSjKnK219w3R6eKgI58ffMW
	  $ r4nd0mstr1ng --number 7
	    86mUSdT
	  $ r4nd0mstr1ng -n 50
	    GXq0Upu6U7m2qhJqeNZUm36eU123tUIVU7FsHiX92XRrqZIeKU
	
	Options
	 -n, --number  Generate an string with certain length
	 -h, --help    Show this help message
	 -v, --show    Show package version
`, {
	flags: {
		number: {
			type: 'boolean',
			alias: 'n'
		},
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		}
	}
});

console.log(cli.flags.number ? randomStr(cli.input[0]) : randomStr(cli.input[0]));