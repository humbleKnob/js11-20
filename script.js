//first function
function firstLast6(arr){
    var six = "";
    var first = arr[0];
    var end = arr[arr.length-1];
    if(first == 6|| end == 6){
        six = true;
    } else {
        six = false;
    }
    return six;
}

//second function
function has23(arr){
    var has23 = "";
    var first = arr[0];
    var end = arr[1];
    if(first == 2|| end == 2||first == 3|| end == 3){
        has23 = true;
    }else {
        has23 = false;
    }
    return has23;
}

//third function
function fix23(arr){
    var i = "";
    for(i = 0; i < arr.length; i++){
        if (arr[i]==2&&arr[i+ 1]==3){
            arr[i+1]= 0
        }
    }
    return arr;
}

//fourth function
function countYZ(str) {
    var i = "";
    var count = 0;
    var str = str + " ";
    for (i = 0; i < str.length; i++) {
        if (str[i] == "y" && str[i + 1] == " ") {
            count += 1;
        } else if (str[i] == "z" && str[i + 1] == " ") {
            count += 1;
        } else if (str[i] == "Y" && str[i + 1] == " ") {
            count += 1;
        } else if (str[i] == "Z" && str[i + 1] == " ") {
            count += 1;
        }
    }
    return count;
}

//fifth function
function endOther(str1, str2) {
    var str1Lower = str1.toLowerCase();
    var str2Lower = str2.toLowerCase();
    var endOther = "";
    var biggerStr= "";
    var smallerStr = "";
    if(str1.length > str2.length){
        biggerStr = str1Lower;
        smallerStr = str2Lower;
    } else {
        biggerStr = str2Lower;
        smallerStr = str1Lower;
    }
    var subLength = smallerStr.length;
    var index = biggerStr.indexOf(smallerStr);
    if(index == biggerStr.length - subLength){
        endOther = true;
    } else {
        endOther = false;
    }
    return endOther;
}

//sixth function
function starOut(str){
    var newSub = "";
    for (i = 0; i < str.length; i++){
         if(str[i+1] != "*" && str[i-1] != "*" && str[i] != "*"){
            newSub += str[i];
        }
    }
    return newSub;
}

//seventh function
function getSandwich(str){
    var first = str.indexOf("bread");
    var last = str.lastIndexOf("bread");
    if (first == -1||first==last){
        var sammy = "";
    } else {
        var sammy = str.substring(first+5, last);
    }
    return sammy;
}

//eighth function
function canBalance(arr){
    var sum1 = 0;
    var sum2 = 0;
    for(i = 0; i < arr.length; i++){
        sum1 += arr[i];
        for(u = i+1; u < arr.length; u++) {
            sum2 += arr[u];
        }
        if(sum1 === sum2){
            return true;
        }
        sum2 = 0;
    }
    return false;
}

//ninth function
function countClumps(arr){
    var countClumps = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1] && arr[i] != arr[i-1]){
            countClumps += 1;
        }
    }
    return countClumps;
}

//tenth
function evenlySpaced(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
    var min = Math.min(num1, num2, num3);
    var mid = num1 + num2 + num3 - max - min;
    if(mid - min == max - mid){
        return true;
    }
    return false;
}

document.getElementById("output").innerHTML += firstLast6([6, 1]);
document.getElementById("output").innerHTML += has23([6, 1]);
document.getElementById("output").innerHTML += fix23([6, 1]);
document.getElementById("output").innerHTML += countYZ("zz zy");
document.getElementById("output").innerHTML += endOther([6, 1]);
document.getElementById("output").innerHTML += starOut("brp*puh");
document.getElementById("output").innerHTML += getSandwich("8breadhambread0");
document.getElementById("output").innerHTML += canBalance([1, 3, 4, 5, 2]);
document.getElementById("output").innerHTML += countClumps([1, 3, 3, 5, 2]);
document.getElementById("output").innerHTML += evenlySpaced(5, 10, 15);