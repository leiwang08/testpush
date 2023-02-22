function getUsername(){
   var username =  $.session.getUsername();
   //aaaasss
   //var testaa = 'aaaa';
   return username;
}
var result = "Hello World from User " + getUsername();
$.response.setBody(result);
