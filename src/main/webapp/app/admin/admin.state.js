(function () {
    'use strict';

    angular
        .module('cignaApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('admin', {
            abstract: true,
            parent: 'app'
        })
            .state('ops', {
                abstract: true,
                parent: 'app'
            });
    }
})();
