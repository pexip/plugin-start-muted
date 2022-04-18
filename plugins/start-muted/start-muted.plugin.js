(function () {

  function load() {
		window.PEX.actions$.ofType('[Conference] Connect Success').subscribe( (action) => {
      window.PEX.dispatchAction({type: '[Conference] Mute Camera'});
      window.PEX.dispatchAction({type: '[Conference] Mute Microphone'});
    });
  }
  
  function unload() {
    console.log('Start Muted Plugin', 'Unloaded');
  }

  PEX.pluginAPI.registerPlugin({
    id: 'start-muted-plugin-1.0',
    load: load,
    unload: unload
  });

})();