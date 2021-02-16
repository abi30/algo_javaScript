function isAlphaNumaric(char){
    var code = char.charCodeAt(0);
    if (!(code>=48 && code <=57) && // numeric (0-9)
        !(code>=65 && code <=90) && // upper A-Z
        !(code>=97 && code <=122)){ // lower a-z
            return false;
        }
        return true;
}