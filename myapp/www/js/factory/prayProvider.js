'use strict';
app.service('prayProvider',function($http){

  this.getAll = function(callback) {
    var url = "https://ramadanv2.herokuapp.com/prieres";
    var req ={
      method: 'GET',
      url: url,
      cache :false,
      headers: {
        'Accept':'Application/json',
        'Cache-Controle':'no-cache',
      }
    };
    $http(req)
      .success(function(response) {
        callback(response);
      })
      .error(function (response) {
        console.log(response);
      })

  };
/*
  function getOne(slug)
  {
    var bool = false;
    var num =0;
    var taiile = prayers.length;
    while(bool==false)
    {
      if(prayers[num].Date==slug)
      {
        bool =true;
      }else
      {
        num +=1;
      }
   }
    return prayers[num];
  }*/

});
