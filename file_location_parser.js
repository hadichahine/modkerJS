const START_INDEX = 0;
const INVALID_FORMAT_EXCEPTION_MESSAGE = "Invalid locator (must be 'modulename:location/of/file.js')";

module.exports = {
  moduleName: function(location_string){
    if(location_string.indexOf(":") === -1)
      throw INVALID_FORMAT_EXCEPTION_MESSAGE + " Given : "+location_string;
    return location_string.slice(START_INDEX,location_string.indexOf(":"));
  },
  fileLocation: function(location_string){
    if(location_string.indexOf(":") === -1)
      throw INVALID_FORMAT_EXCEPTION_MESSAGE + + " Given : "+location_string;
    return location_string.slice(location_string.indexOf(":")+1,location_string.length);
  }
}
