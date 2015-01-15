var fsTools = require('fs-tools');
var program = require('commander');
var fs = require('fs');
var path = require('path');

program
  .version('0.0.1')
  .option('-r, --source [path]', 'source path', './source')
  .option('-p, --spec [path]', 'spec path', './spec');

var missingSpecs = [];

fsTools.walk(program.source, '.js$', function(srcPath,stats,callback){
  //build spec path from path
  //strip .js, add Spec.js
  var specName = path.basename(srcPath,'.js') + 'Spec.js';
  //get specPath
  var commonPath = path.dirname(srcPath).split(path.sep).slice(1).join(path.sep);
  if(!fs.existsSync(path.join(program.spec,commonPath,specName))){
    console.log('missing spec: ' + specName);
    missingSpecs.push(srcPath);
  }
  callback();
}, function (err){
  if(err){
    throw err;
  }
  if(missingSpecs.length > 0){
    console.warn('`Spec.js` files are missing for the following files:');
    missingSpecs.forEach(function(srcPath){
      console.warn(srcPath);
    });
  }else{
    console.log('Spec files present for all source files');
  }
});

program.parse(process.argv);

