/*
 *
 * Shell module for SPA
*/

spa.shell = function () {
  
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
  configMap = {},
  stateMap = {},
  jqueryMap = {},

  setJqueryMap, configModule, initModule


  //------------------- BEGIN UTILITY METHODS ------------------


  //--------------------- BEGIN DOM METHODS --------------------
  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = { 
      $container : $container,
      $chat : $container.find( '.spa-shell-chat' )
    };
  };
  
  //------------------- BEGIN EVENT HANDLERS -------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();

  return { initModule : initModule };
}();
