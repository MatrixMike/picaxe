//main:
while(true){
  picaxe.pin.write("C.0",1);
  picaxe.pause(1000);
  picaxe.pin.write("C.0",0);
  picaxe.pause(500);
};
