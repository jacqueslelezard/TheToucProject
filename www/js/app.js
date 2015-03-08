var app = angular.module('ToucApp',['ngAnimate', 'ngTouch', 'angular-gestures']);
var w = window.innerWidth;
var h = window.innerHeight;
var x = 0;
var y = 0;

app.controller('MainCtrl', function($scope) {
    $scope.title = "the touc project";
    $scope.name = "";
    $scope.user = "new";
    $scope.touc = false;
    $scope.clear = function(){
        var elements = document.getElementsByClassName("simple_touc");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
    }
    }
    $scope.touch = function($event){
        $event.preventDefault();
        $event.stopPropagation();
        var touches = $event.touches;
        if(touches.length>=4){
            $scope.success_list.a5touc.completed=true;
            alert("5 touc");
        }
        else if(touches.length>=3){
            $scope.success_list.a4touc.completed=true;
            alert("4 touc");
        }
        else if(touches.length>=2){
            $scope.success_list.a3touc.completed=true;
            x0 = (($event.changedTouches[0].pageX)*100)/w;
            y0 = (($event.changedTouches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, 2);
            x1 = (($event.changedTouches[1].pageX)*100)/w;
            y1 = (($event.changedTouches[1].pageY)*100)/h;
            instantiate_touc(x1,y1, 2);
            x2 = (($event.changedTouches[2].pageX)*100)/w;
            y2 = (($event.changedTouches[2].pageY)*100)/h;
            instantiate_touc(x2,y2, 2);
        }
        else if(touches.length>=1){
            $scope.success_list.a2touc.completed=true;
            x0 = (($event.changedTouches[0].pageX)*100)/w;
            y0 = (($event.changedTouches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, 1);
            x1 = (($event.changedTouches[1].pageX)*100)/w;
            y1 = (($event.changedTouches[1].pageY)*100)/h;
            instantiate_touc(x1,y1, 1);
        }
        else if(touches.length>=0){
            $scope.success_list.a1touc.completed=true;
            x0 = (($event.changedTouches[0].pageX)*100)/w;
            y0 = (($event.changedTouches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, 0);
        }
        
        //alert($event);
        /*waitTouch: function() {
          var d = $event.defer();
          $http.get($event.pageY).success(function(data) {
                          x = (($event.pageX)*100)/w;
                          y = (($event.pageY)*100)/h;
                          d.resolve();
                          wait();
                    }).error(function(data, status) {
                          d.reject(status);
                     });
                   return d.promise;
          }*/
       //console.log($event)

        

        //var touch = event.touches[0];
        //x = touch.pageX;
        //y = touch.pageY;
        //console.log("coordonées du clic : "+ x + " : "+ y);
        
    };

    function instantiate_touc(x,y,color){
        var toucDiv = document.createElement("div");
        toucDiv.className = "simple_touc";
        toucDiv.style.top=(y-1)+"%";
        toucDiv.style.left=(x-1)+"%";
        var game=document.getElementsByClassName("game")[0];
        game.appendChild(toucDiv);
    }


    $scope.page="achievements";
     $scope.success_list = {
        'a1touc' : {'completed': 'false', 'name': 'touc'},
        'a2touc' :{'completed': 'false', 'name': 'touc x2'},
        'a3touc' :{'completed': 'false', 'name': 'touc x3'},
        'a4touc' :{'completed': 'false', 'name': 'touc x4'},
        'a5touc' :{'completed': 'false', 'name': 'touc x5'}
         };
    /*$scope.success_list = [
        {'completed': 'false', 'name': 'touc'},
        {'completed': 'false', 'name': 'double touc'},
        {'completed': 'false', 'name': 'touc x3'},
        {'completed': 'false', 'name': 'touc x4'},
        {'completed': 'false', 'name': 'touc x5'},
        {'completed': 'false', 'name': 'touc'},
        {'completed': 'false', 'name': 'double touc'},
        {'completed': 'false', 'name': 'touc x3'},
        {'completed': 'false', 'name': 'touc x4'},
        {'completed': 'false', 'name': 'touc x5'},
        {'completed': 'false', 'name': 'touc'},
        {'completed': 'false', 'name': 'double touc'},
        {'completed': 'false', 'name': 'touc x3'},
        {'completed': 'false', 'name': 'touc x4'},
        {'completed': 'false', 'name': 'touc x5'},
        {'completed': 'false', 'name': 'touc'},
        {'completed': 'false', 'name': 'double touc'},
        {'completed': 'false', 'name': 'touc x3'},
        {'completed': 'false', 'name': 'touc x4'},
        {'completed': 'false', 'name': 'touc x5'},

    ];*/

});


document.getElementsByClassName('game').onclick=function(event){
    console.log("oh!");
    var random = Math.floor((Math.random() * 150) + 20);
    var x = ((event.pageX -50)*100)/w;
    var y = ((event.pageY -50)*100)/h;
    console.log(random);
		      //usersRef.push({left: x, top: y, size: random});
}