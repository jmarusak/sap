/*
 * spa.chat.js
 * Chat feature module for SPA
*/

spa.chat = function () {
  
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
  configMap = {
    main_html : String()
      + '<div>'
      +   'Say hello to chat'
      + '</div>',
    settable_map : {}
  },
  stateMap = {
    $container : null
  },
  jqueryMap = {},
  setJqueryMap, configModule, initModule


  //------------------- BEGIN UTILITY METHODS ------------------


  //--------------------- BEGIN DOM METHODS --------------------
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { 
      $container : $container,
    };
  };
  
  //------------------- BEGIN EVENT HANDLERS -------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  configModule = function ( input_map ) {
    spa.util.setConfigMap({
      input_map    : input_map,
      settable_map : configMap.settable_map,
      config_map   : configMap
    });
    return true;
  };

  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();
    return true;
  };

  return { 
    configModule: configModule,
    initModule : initModule
  };
}();
