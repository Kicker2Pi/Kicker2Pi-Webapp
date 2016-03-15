(function() {
  'use strict';

  angular
    .module('kicker2PiWebapp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
