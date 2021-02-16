function countingChar(str){
// dicler an object that at end return 
 var answer={};
//  for loop over the string and check the character
for (var i =0; i<str.length;i++){
// asign character
     var char = str[i].toLowerCase();
//      right not we are gonna count character
if (answer[char]>0){
    answer[char]++;
   }else{
//        if there is any space of other char then counting here. as a value
     answer[char]=1;
   };
}
return answer;

}