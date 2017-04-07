/**
 * Created by adhabale on 2/15/2017.
 */
(function() {
    'use strict';

    angular
        .module('cignaApp')
        .controller('FirstviewController', ActivationController);

    ActivationController.$inject = ['$stateParams'];

    function ActivationController ($stateParams) {
        var vm = this;


        console.log('firstview');
    }
})();
