var egg = new Egg();
egg
  .addCode("up,up,down,down,left,right,left,right", function() {
    var easter = new EasterEgg();
    easter.show();
    setTimeout(function(){  
        easter.hide();
    }, 5000);
  })
  .addHook(function(){
    console.log("Hook called for: " + this.activeEgg.keys);
  })
  .listen();