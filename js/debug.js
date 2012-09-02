$(function(){

var boxTranslateX = 20;
var boxTranslateY = -40;
var boxTranslateZ = -300;
    
var rotateX = -25;
var rotateY = -45;
var rotateZ = 0;

$(function() {
    
    angleEngine();
    
    $("#btn_1").click(function(){
        rotateY = -90;
        angleEngine();
        
    });
    
    $("#btn_2").click(function(){
        rotateY = -180;
        angleEngine();
        
    });
    
    $("#btn_3").click(function(){
        rotateY = -270;
        angleEngine();
        
    });
    
    $("#btn_reset").click(function(){

        boxTranslateZ = 0;
            
        rotateX = 0;
        rotateY = 0;
        rotateZ = 0;
        angleEngine();
        
    });
    
    
    function angleEngine() {
    
        $(".hashira").css({
           
            "-webkit-transition-duration":"2s",
            
            
            "-webkit-transform": 'translate3d( ' + boxTranslateX + 'px, ' + boxTranslateY+'px, '+boxTranslateZ+'px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) rotateZ('+rotateZ+'deg)'
                   
            
        });
    }
});


})