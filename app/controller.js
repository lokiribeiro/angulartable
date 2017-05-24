/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 *
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController);

  MainController.$inject = ['LocalStorage', 'QueryService', '$scope', '$http'];


  function MainController(LocalStorage, QueryService, $scope, $http) {

    // 'controller as' syntax
    //var self = this;
    $scope.selected = [];

    $http.get('orderlist.json')
       .then(function(res){
         $scope.orderlists = res.data;
          console.info('orderlists', $scope.orderlists);

        });

        $scope.query = {
       order: 'name',
       limit: 5,
       page: 1
     };



    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }


})();
