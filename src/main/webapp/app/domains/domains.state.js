/**
 * Created by adhabale on 2/15/2017.
 */
(function() {
    'use strict';

    angular
        .module('cignaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('domains', {
            abstract: true,
            parent: 'app'
        });
    }
})();
