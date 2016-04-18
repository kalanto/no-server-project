var num = 1;
var photo = "/img/" + num + ".jpg";
var nextPhoto = function(num, photo){
   if(num < 27){
      num++;
      return num;
   }
   if(num > 26){
      num = 1;
   }
};
var prevPhoto = function(num, photo){
   if(num > 26){
      num = 1;
   }
   if(num < 1){
      num = 26;
      return num;
   }
};
