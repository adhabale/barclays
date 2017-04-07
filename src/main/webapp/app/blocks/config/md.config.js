(function () {
    'use strict';

    angular
        .module('cignaApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();
