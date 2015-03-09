var app = angular.module('ToucApp',['ngAnimate', 'ngTouch', 'angular-gestures']);
var w = window.innerWidth;
var h = window.innerHeight;
var x = 0;
var y = 0;

function onShake() {
    alert("wouuu");
    /*if($scope.success_list.a_shake_touc.completed=="false"){
            $scope.success_list.a_shake_touc.completed=true;
            instantiate_achievement($scope.success_list.a_shake_touc.name);   
        }*/
};
/*shake.startWatch(onShake);*/



app.controller('MainCtrl', function($scope) {
    $scope.title = "the touc project";
    $scope.name = "";
    $scope.user = "new";
    $scope.touc = false;
    $scope.nb_touc = 0;
   
    
    $scope.clear = function(){
        var elements = document.getElementsByClassName("simple_touc");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        var elements = document.getElementsByClassName("achievement_unlock");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
    
    $scope.rotate = function($event){
        if($scope.success_list.a_rotate_touc.completed=="false"){
                $scope.success_list.a_rotate_touc.completed=true;
                instantiate_achievement($scope.success_list.a_rotate_touc.name);   
            }
    }
     $scope.press = function($event){
        if($scope.success_list.a_press_touc.completed=="false"){
                $scope.success_list.a_press_touc.completed=true;
                instantiate_achievement($scope.success_list.a_press_touc.name);   
            }
    }
    $scope.pinchin = function($event){
        if($scope.success_list.a_pinchin_touc.completed=="false"){
                $scope.success_list.a_pinchin_touc.completed=true;
                instantiate_achievement($scope.success_list.a_pinchin_touc.name);   
            }
    }
    
    $scope.touch = function($event){
        $event.preventDefault();
        $event.stopPropagation();
        var touches = $event.touches;
        
        if($scope.nb_touc>10){
            if($scope.success_list.a_10_touc.completed=="false"){
                $scope.success_list.a_10_touc.completed=true;
                instantiate_achievement($scope.success_list.a_10_touc.name);   
            }
        }
        if($scope.nb_touc>50){
            if($scope.success_list.a_50_touc.completed=="false"){
                $scope.success_list.a_50_touc.completed=true;
                instantiate_achievement($scope.success_list.a_50_touc.name);   
            }
        }
        if($scope.nb_touc>100){
            if($scope.success_list.a_100_touc.completed=="false"){
                $scope.success_list.a_100_touc.completed=true;
                instantiate_achievement($scope.success_list.a_100_touc.name);   
            }
        }
        
        if(touches.length>=4){
            $scope.success_list.a5touc.completed=true;
            alert("5 touc");
        }
        else if(touches.length>=3){
            $scope.success_list.a4touc.completed=true;
            alert("4 touc");
        }
        else if(touches.length>=2){
            if($scope.success_list.a3touc.completed=="false"){
                $scope.success_list.a3touc.completed=true;
                instantiate_achievement($scope.success_list.a3touc.name);   
            }
            x0 = (($event.changedTouches[0].pageX)*100)/w;
            y0 = (($event.changedTouches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, '#f0f');
            x1 = (($event.changedTouches[1].pageX)*100)/w;
            y1 = (($event.changedTouches[1].pageY)*100)/h;
            instantiate_touc(x1,y1, '#f0f');
            x2 = (($event.changedTouches[2].pageX)*100)/w;
            y2 = (($event.changedTouches[2].pageY)*100)/h;
            instantiate_touc(x2,y2, '#f0f');
        }
        else if(touches.length>=1){
            if($scope.success_list.a2touc.completed=="false"){
                $scope.success_list.a2touc.completed=true;
                instantiate_achievement($scope.success_list.a2touc.name);   
            }
            x0 = (($event.touches[0].pageX)*100)/w;
            y0 = (($event.touches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, '#af0');
            x1 = (($event.touches[1].pageX)*100)/w;
            y1 = (($event.touches[1].pageY)*100)/h;
            instantiate_touc(x1,y1, '#af0');
        }
        else if(touches.length>=0){
            console.log(touches);
            if($scope.success_list.a1touc.completed=="false"){
                $scope.success_list.a1touc.completed=true;
                instantiate_achievement($scope.success_list.a1touc.name);   
            }
            x0 = (($event.changedTouches[0].pageX)*100)/w;
            y0 = (($event.changedTouches[0].pageY)*100)/h;
            instantiate_touc(x0,y0, '#fff');
        }
        
    };

    function instantiate_touc(x,y,color){
        var toucDiv = document.createElement("div");
        toucDiv.className = "simple_touc";
        toucDiv.style.top=(y-1)+"%";
        toucDiv.style.backgroundColor = color;
        toucDiv.style.left=(x-1)+"%";
        var game=document.getElementsByClassName("game")[0];
        game.appendChild(toucDiv);
    }
    function instantiate_achievement(name){
        var toucDiv = document.createElement("div");
        toucDiv.className = "achievement_unlock";
        toucDiv.innerHTML = "<span>New achievement : </span><br/>" + name + "<br/> unlocked !!!";
        var game=document.getElementsByClassName("game")[0];
        game.appendChild(toucDiv);
    }


    $scope.page="achievements";
     $scope.success_list = {
        'a1touc' : {'completed': 'false', 'name': 'the original touc'},
        'a2touc' :{'completed': 'false', 'name': 'the double touc'},
        'a3touc' :{'completed': 'false', 'name': 'the triple touc'},
        'a_rotate_touc' :{'completed': 'false', 'name': 'rotational touc'},
        'a_pinchin_touc' :{'completed': 'false', 'name': 'zooooom touc'},
        'a_press_touc' :{'completed': 'false', 'name': 'the no-touc'},
        'a_10_touc' :{'completed': 'false', 'name': '10 touc'},
        'a_50_touc' :{'completed': 'false', 'name': '50 touc'},
        'a_100_touc' :{'completed': 'false', 'name': '100 touc'},
         };
   

});

/*
document.getElementsByClassName('game').onclick=function(event){
    console.log("oh!");
    var random = Math.floor((Math.random() * 150) + 20);
    var x = ((event.pageX -50)*100)/w;
    var y = ((event.pageY -50)*100)/h;
    console.log(random);
		      //usersRef.push({left: x, top: y, size: random});
}*/