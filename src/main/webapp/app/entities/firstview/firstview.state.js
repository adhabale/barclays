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
        $stateProvider.state('firstview', {
            parent: 'entity',
            url: '/firstview',
            data: {
                authorities: ['ROLE_ADMIN'],
                pageTitle: 'First View'
            },
            views: {
                'content@': {
                    templateUrl: 'app/entities/firstview/firstview.html',
                    controller: 'FirstviewController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();

