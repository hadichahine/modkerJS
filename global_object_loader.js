var __global_object;

module.exports = {
  loadObject: function (object){
      __global_object = object;
  },
  unloadObject: function (){
    __global_object = undefined;
  },
  retrieveObject: function (){
      return __global_object;
  },
  isLoaded: function (){
    return __global_object !== undefined;
  }
}
