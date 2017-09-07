'use strict';
const GUID = require("guid");
const csv = require('csv-manipulator');
const fs = require('fs');
const process = require('process');
let random = GUID.raw();
let param = process.argv[2]
var content = fs.readFileSync(param, 'utf8');
var obj = JSON.parse(content);
csv.writeCsv(obj, random + '.csv', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log('CSV saved successfully!!!!!!!!');
    }
});