describe(' firstview state test', function() {

  var  $state;

  beforeEach(function() {
module('cignaApp');

    inject(function( _$state_, $templateCache) {
      $state = _$state_;


      // We need add the template entry into the templateCache if we ever
      // specify a templateUrl
      $templateCache.put('app/entities/firstview/firstview.html', '');
    })
  });

  it('should respond to URL', function() {
    expect($state.href('firstview')).toEqual('#/firstview');
  });

  
  
  
  
});