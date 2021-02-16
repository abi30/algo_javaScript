function countingChar(str){
// dicler an object that at end return 
 var char = "c";
 var answer={};
 answer[char]=0;
for (var i =0; i<str.length;i++){

if (char === str[i] ){
    
     answer[char]++;
   }

}
return answer;

}