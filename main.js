const global_object_loader = require("./global_object_loader.js");
const file_location_parser = require("./file_location_parser.js");
const fs = require("fs");

function load(){
    const loaderJSON = process.cwd()+"/"+"loader.json";
    global_object_loader.loadObject(JSON.parse(fs.readFileSync(loaderJSON,"utf-8")));
}

module.exports = function (locator_string){
  if(!global_object_loader.isLoaded())
    try{
      load();
    }catch(loadException){
      console.log(loadException);
    }
  const moduleName = file_location_parser.moduleName(locator_string);
  const moduleDirectory = global_object_loader.retrieveObject()[moduleName];
  const fileLocationWithinModule = file_location_parser.fileLocation(locator_string);
  return require(process.cwd()+"/"+moduleDirectory+"/"+fileLocationWithinModule);
}
