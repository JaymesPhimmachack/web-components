
(function(window){

 /* The contents of your JS file */

  
var validator = { };


// Checks if the input parameter is an email address, consisting of three parts: An email address consists of two strings combined by an @ symbol.

  validator.isEmailAddress = function(input){

  var atSymbol;
  var firstString;
  var secondString;
    if(input.indexOf("@") == -1){
      return false;
    }else{
      
     atSymbol = input.indexOf("@");
     firstString = input.slice(0,atSymbol);
     secondString = input.slice(atSymbol+1);
      
      if(firstString !== "" || secondString !== ""){
        return true;
      }else{
        return false;
      }
       
    }
   
};


// Checks if the input parameter is a valid phone number for your country.


validator.isPhoneNumber = function(input){
 
  
  
   for(var i=0;i<input.length;i++){
    
     if(i === 3 || i === 7){

          if(input[i] !== "-"){
           
              return false;
         }
       
    }else if(typeof Number(input[i]) !== 'number'){
      
              return false;

      }

  }
      return true;    

};


// Returns the input parameter text with all symbols removed. 
  
  validator.withoutSymbols = function(input){
      var characters = 

['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',

'y','z',' '];
var newStr = "";
   for(var i=0;i<input.length;i++){
    
      if(characters.indexOf(input.toLowerCase()[i]) !== -1){
            newStr += input[i];
          
      }

   }
  return newStr;

};
  
// Checks if the input parameter text is a valid date. 



  validator.isDate = function(input){
  if(Date.parse(input)){
	return true;
	
}
else {
  return false;

}

};


// Checks if the input parameter is a date that comes after the reference date. 
  
    validator.isBeforeDate = function(input, reference){
      var d1;
      var d2;
           
   
  if(this.isDate(input) &&  this.isDate(reference)){
       d1 = new Date(input);
      d2 = new Date(reference);
     
       if(d1.getFullYear() <= d2.getFullYear()){
           if(d1.getMonth() <= d2.getMonth()){
                if(d1.getDate() < d2.getDate()){
                     return true;
                }else{
                   return false;
                }
          }else{
              return false;
           }
     
      }else{
         return false;
  }
}else{
  throw "Please enter valid date.";
}


};

// Checks if the input parameter is a date that comes before the reference date. 

  
  validator.isAfterDate = function(input, reference){
       var d1;
      var d2;
           
   
  if(this.isDate(input) &&  this.isDate(reference)){
    
     d1 = new Date(input);
      d2 = new Date(reference);
     
       if(d1.getFullYear() >= d2.getFullYear()){
           if(d1.getMonth() >= d2.getMonth()){
                if(d1.getDate() > d2.getDate()){
                     return true;
                }else{
                   return false;
                }
          }else{
              return false;
           }
     
      }else{
         return false;
      }
}else {
  throw "Please enter valid date.";
}
    
    
  };


// Checks if the input parameter is a date that comes before today. 
  
validator.isBeforeToday = function(input){
           var d1;
      var d2;

     d1 = new Date(input);
      d2 = new Date();
   
   if(d1.getFullYear() <= d2.getFullYear()){
           if(d1.getMonth() <= d2.getMonth()){
                if(d1.getDate() < d2.getDate()){
                     return true;
                }else{
                   return false;
                }
          }else{
              return false;
           }
     
      }else{
         return false;
      }
}


// Checks if the input parameter is a date that comes after today. 


validator.isAfterToday = function(input){
         var d1;
      var d2;
           
   
  if(this.isDate(input)){

     d1 = new Date(input);
     d2 = new Date();
     
       if(d1.getFullYear() >= d2.getFullYear()){

           if(d1.getMonth() >= d2.getMonth()){
                if(d1.getDate() > d2.getDate()){
                     return true;
                }else{
                   return false;
                }
          }else{
              return false;
           }
     
      }else{
         return false;
      }
}else {
  throw "Please enter valid date.";
}
  
};


// Checks the input parameter and returns true if it is an empty string–a string with no length or characters that is represented as "" or only contains whitespace(s).
  
  
  validator.isEmpty = function(input){
  
 if(input === null || input.trim().length !== 0){
     return false;     
     
   }else {

     return true;
   }

};


// Checks if the input text parameter contains one or more of the words within the words array. 

  
  validator.contains = function(input, words){
  
   
    var inputSplit = input.replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()"]/g," ").toLowerCase().split(" ");
 
    
   for(var i=0;i<inputSplit.length;i++){
        for(var j=0;j<words.length;j++){
        if(words[j].indexOf(inputSplit[i]) !== -1){
              return true;
              }
        }
    }
    return false;

};


// Checks if the input text parameter does not contain any of the words within the words array. 

  
  validator.lacks = function(input, words){
  
    return this.contains(input,words);
    /*
     var inputSplit = input.replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()"]/g," ").toLowerCase().split(" ");
 
   for(var i=0;i<inputSplit.length;i++){
        for(var j=0;j<words.length;j++){
        if(words[j].indexOf(inputSplit[i]) !== -1){
              return false;
              }
        }
    }
    return true;*/


};


// Checks that the input text parameter contains only strings found within the strings array.

  
  validator.isComposedOf = function(input, strings){
      
    var inputSplit = input.split("");
 
   for(var i=0;i<inputSplit.length;i++){
        
       for(var j=0;j<strings.length;j++){
        
        if(strings[j] == inputSplit[i]){
              return true;
              
        }
       }
    }
    return false;

};


// Checks if the input parameter’s character count is less than or equal to the n parameter.


  
  validator.isLength = function(input, n){

  return input.length <= n;


};
  

// Checks if the input parameter’s character count is greater than or equal to the n parameter.

  
  validator.isOfLength = function(input, n){

  return input.length >= n;

};


// Counts the number of words in the input parameter. 

  
  validator.countWords = function(input){
  
    var count = 0;
   
    var inputArr = input.replace(/[.,\/#!$%\'^&\*;:{}=\-_`~()"]/g," ").split(" ");
   
    for(var i=0;i<inputArr.length;i++){
      
      if(inputArr[i] !== ""){
          count++;
        
      }
    }
   
    return count;
    
  

};


// Checks if the input parameter has a word count less than or equal to the n parameter.
  
  
  validator.lessWordsThan = function(input, n){

return this.countWords(input) <= n;


};


// Checks if the input parameter has a word count greater than or equal to the n parameter.

  
  validator.moreWordsThan = function(input, n){
    

return this.countWords(input) >= n;


};


// Checks that the input parameter matches all of the following:

// input is greater than or equal to the floor parameter
// input is less than or equal to the ceil parameter.


validator.isBetween = function(input, floor, ceil){
     
var result = this.countWords(input);

return result >= floor && result <= ceil;


};


// Checks that the input parameter string is only composed of the following characters: a—z, A—Z, or 0—9. 

  
  validator.isAlphanumeric = function(input){

   

 var characters = 

['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',

'y','z'];
  
  var lowerCaseInput = input.toLowerCase();
  
     for(var i=0;i<lowerCaseInput.length;i++){
    
        if(characters.indexOf(lowerCaseInput[i]) === -1){
          
          return false;
        }
     }
    return true;



};


// Checks if the input parameter is a credit card or bank card number. 


validator.isCreditCard = function(input){
    

  var characters = 

['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x',

'y','z'];
  
  var lowerCaseInput = input.toLowerCase().split("-").join("");
   // return lowerCaseInput;
  if(lowerCaseInput.length !== 16 || lowerCaseInput === ""){
    return false;
  }else{
     for(var i=0;i<lowerCaseInput.length;i++){
    
        if(characters.indexOf(lowerCaseInput[i]) === -1){
          
          return false;
        }
     }
    return true;
  }


};


// Checks if the input string is a hexadecimal color, such as #3677bb. 


validator.isHex = function(input){
     

  var characters = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
  
  var lowerCaseInput = input.toLowerCase();
  
  if(input.length > 7 || input[0] !== "#"){
       
   return false;  

   }else{ 
      for(var i =1;i<input.length;i++){
        if(characters.indexOf(lowerCaseInput[i]) === -1){
          return false;
        }
     }
     return true;
  }



};


// Checks if the input string is an RGB color, such as rgb(200, 26, 131). 

  
  validator.isRGB = function(input){
    
 var str = input.substr(0,3);
 var numStr = input.slice(4).replace(")",""); 
 var values =  numStr.split(",");
 var colorVal1 = +values[0]; 
 var colorVal2 = +values[1]; 
  var colorVal3 = +values[2];
 
   if(str === 'rgb'){
        if(colorVal1 >= 0 && colorVal1 <= 255){
           if(colorVal2 >= 0 && colorVal2 <= 255){
               if(colorVal3 >= 0 && colorVal3 <= 255){
                    return true;
               
               }else {
                return false;
               }
             
           }else{
             return false;
           }
       }else{
       
          return false;
       }
  }else{
         return false;
    }



};


//Checks if the input string is an HSL color, such as hsl(122, 1, 1). 


validator.isHSL =  function(input){

   
 var str = input.substr(0,3);
 var numStr = input.slice(4).replace(")",""); 
 var values =  numStr.split(",");
 var colorVal1 = +values[0]; 
 var colorVal2 = +values[1]; 
  var colorVal3 = +values[2];
 
   if(str === 'hsl'){
        if(colorVal1 >= 0 && colorVal1 <= 360){
           if(colorVal2 >= 0 && colorVal2 <= 1){
               if(colorVal3 >= 0 && colorVal3 <= 1){
                    return true;
               
               }else {
                return false;
               }
             
           }else{
             return false;
           }
       }else{
       
          return false;
       }
  }else{
         return false;
    }

};

// Checks if the input parameter is a hex, RGB, or HSL color type.

  
  validator.isColor = function(input){

 
    var str = input.substr(0,3);   

   if(input[0] === "#"){
        return this.isHex(input);   

   }else if(str === "rgb"){
       return this.isRGB(input);

   }else if(str === "hsl"){
       return this.isHSL(input);
  
   }else{
    
      return false;
   
   }


};

// Checks if the input parameter has leading or trailing whitespaces or too many spaces between words. 
  
  validator.isTrimmed = function(input){
   var arr = input.split("Visiting new places is fun.");
  var result = "";
 
  for(var i=0;i<arr.length;i++){
      if(arr[i] !== ""){
        
       result += arr[i];
      
       if(i < arr.length-1){
          result += " ";
        }
      }
  }
  
  return result === input;

};
  



window.validator = validator;

})(window);





window.onload = function() {

  
  
  
var signupForm = document.getElementById('signup');
var signInForm = document.getElementById('sign-in');
var shipBillForm = document.getElementById('ship-bill');  
var searchForm = document.getElementById('search-form'); 
var scheduleForm = document.getElementById('schedule');
var questionnaireForm = document.getElementById('questionnaire');
var creditCardForm = document.getElementById('credit-card');


//  Credit Card Form Validation

creditCardForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
 
 
var passCount = 0;

var name = document.getElementById("name");
  
var cardNum = document.getElementById("number");
  
var csv = document.getElementById("csv");


// Check input is not empty and greater than 2 
if(!validator.isEmpty(name.value) && name.value.length >= 2){
      passCount++;
}else{
    window.alert("Please enter valid name.");
}

// Check input is not empty and input is 16 characters
if(!validator.isEmpty(cardNum.value) && validator.isCreditCard(cardNum.value)){
      passCount++;
}else{
    window.alert("Please enter valid credit card.");
}

// Check input is not empty, equal to 3, and number only
if(!validator.isEmpty(csv.value) && Number(csv.value) && csv.value.length == 3){
      passCount++;
}else{
    window.alert("Please enter valid csv.");
}

// Check all input has been entered
 if(passCount === 3) {
           window.alert("valid");
          creditCardForm.className = "valid"; 
        }
        else {
         
          creditCardForm.className = "invalid";
          window.alert("invalid");
        }
        


});
  
  
  //  Sign In Form Validation

signInForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();


var email = document.getElementById("email");
var password = document.getElementById("password");
  
 var passCount = 0;
  
// Check input is not empty and valid email format
if(!validator.isEmpty(email.value) || validator.isEmailAddress(email.value)){
      passCount++;
}else{
    window.alert("Please enter valid email.");
}

// Check input is not empty and greater than 5 
if(!validator.isEmpty(password.value) || password.value.length >= 6){
       passCount++;   
}else{
  window.alert("Please enter valid password.");
}

// Check all input has been entered  
  if(passCount === 2) {
           window.alert("valid");
          signupForm.className = "valid"; 
        }
        else {
         
          signupForm.className = "invalid";
          window.alert("invalid");
        }
   
        
      

});


//  Questionnaire Form Validation

questionnaireForm.addEventListener('submit', function (event) {
                       
 // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

var passCount = 0;


// Ice Cream

var vanilla = document.getElementById("vanilla");
  
var strawberry = document.getElementById("strawberry");

var chocolate = document.getElementById("chocolate");
  
var cookiesNCream = document.getElementById("cookies-n-cream");

var otherIceCream = document.getElementById("other-ice-cream");
  
var otherIceCreamInput = document.getElementById("other-ice-cream-input");


// Animal

var lions = document.getElementById("lions");
  
var tigers = document.getElementById("tigers");

var bears = document.getElementById("bears");
  
var elephants = document.getElementById("elephants");

var otherAnimal = document.getElementById("other-animal");
  
var otherAnimalInput = document.getElementById("other-animal-input");

  


// Ice Cream Check

if(vanilla.checked){
    passCount++;
}else if(strawberry.checked){
    passCount++;
}else if(chocolate.checked){
    passCount++;
}else if(cookiesNCream.checked){
    passCount++;
}else if(otherIceCream.checked && otherIceCreamInput.value !== ""){
    passCount++;
}else {
   window.alert("Please pick favorite ice cream  or enter ice cream if you pick other.");
}




// Animal Check

if(lions.checked){
    passCount++;
}else if(tigers.checked){
    passCount++;
}else if(bears.checked){
    passCount++;
}else if(elephants.checked){
    passCount++;
}else if(otherAnimal.checked && otherAnimalInput.value !== ""){
    passCount++;
}else {
   window.alert("Please pick favorite animal or enter animal if you pick other.");
}


// Check all input has been entered
 if(passCount === 2) {
           window.alert("valid");
          questionnaireForm .className = "valid"; 
        }
        else {
         
          questionnaireForm .className = "invalid";
          window.alert("invalid");
        }
        


});

//  Scheduling Form Validation

scheduleForm.addEventListener('submit', function (event) {


 // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

var passCount = 0;

var date = document.getElementById("date");
  
var time = document.getElementById("time");

var contact = document.getElementById("contact");
  
var email = document.getElementById("email");
  

// Check input is not empty and is after today date  
if(!validator.isEmpty(date.value) && validator.isAfterToday(date.value)){
       passCount++;   
}else{
  
    window.alert("Please enter valid date.");
}

window.alert(time.value);

// Time must be between 9am and 5pm
if(time.value !== "" && time.value >= "09:00"  && time.value < "17:00"){
        passCount++;

}else{
      window.alert("Please enter valid time between 9am and 5pm.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(contact.value) && contact.value.length >= 2){
        passCount++;

}else{
      window.alert("Please enter valid contact.");
}


// Email is not empty and is valid format
if(!validator.isEmpty(email.value) && validator.isEmailAddress(email.value)){
      passCount++;
}else{
    window.alert("Please enter valid email.");
}
  
// Check all input has been entered
 if(passCount === 4) {
           window.alert("valid");
          scheduleForm.className = "valid"; 
        }
        else {
         
          scheduleForm.className = "invalid";
          window.alert("invalid");
        }
      

});
  
  
  //  Search Form Validation

searchForm.addEventListener('submit', function (event) {

 // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

var passCount = 0;

var search = document.getElementById('search'); 

// Check input is not empty and greater than 2 
if(!validator.isEmpty(search.value) && search.value.length >= 2){
        passCount++;

}else{
      window.alert("Please enter valid search value.");
}

// Check all input has been entered
 if(passCount === 1) {
           window.alert("valid");
          searchForm.className = "valid"; 
        }
        else {
         
         searchForm.className = "invalid";
          window.alert("invalid");
        }

    
});
  
  
  //  Shipping Billing Form Validation

shipBillForm.addEventListener('submit', function (event) {


    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();

var passCount = 0;




var billFirstName = document.getElementById("firstname1");
  
var billLastName = document.getElementById("lastname1");

var billAddress = document.getElementById("address1");
  
var billCity = document.getElementById("city1");
  
var billCountry = document.getElementById("country1");


var shipFirstName = document.getElementById("firstname2");
  
var shipLastName = document.getElementById("lastname2");

var shipAddress = document.getElementById("address2");
  
var shipCity = document.getElementById("city2");
  
var shipCountry = document.getElementById("country2");


// Shipping Information

// Check input is not empty and greater than 2 
if(!validator.isEmpty(shipFirstName.value) && shipFirstName.value.length >= 2){
       passCount++;

}else{
    window.alert("Please enter valid ship to first name.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(shipLastName.value) && shipLastName.value.length >= 2){
          passCount++;

}else{
    window.alert("Please enter valid ship to last name.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(shipAddress.value) && shipAddress.value.length >= 2){
         passCount++;

}else{
    window.alert("Please enter valid ship to address.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(shipCity.value) && shipCity.value.length >= 2){
         passCount++;

}else{
    window.alert("Please enter valid ship to city.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(shipCountry.value) && shipCountry.value.length >= 2){
        passCount++;

}else{
    window.alert("Please enter valid ship to country.");
}



// Billing Information


// Check input is not empty and greater than 2 
if(!validator.isEmpty(billFirstName.value) && billFirstName.value.length >= 2){
        passCount++;

}else{
    window.alert("Please enter valid bill to first name.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(billLastName.value) && billLastName.value.length >= 2){
          passCount++;

}else{
    window.alert("Please enter valid bill to last name.");
}


// Check input is not empty and greater than 2 
if(!validator.isEmpty(billAddress.value) && billAddress.value.length >= 2){
          passCount++;

}else{
    window.alert("Please enter valid bill to address.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(billCity.value) && billCity.value.length >= 2){
         passCount++;

}else{
    window.alert("Please enter valid bill to city.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(billCountry.value) && billCountry.value.length >= 2){
        passCount++;

}else{
    window.alert("Please enter valid bill to country.");
}

window.alert(passCount);
  
// Check all input has been entered
 if(passCount === 10) {
           window.alert("valid");
          signupForm.className = "valid"; 
        }
        else {
         
          signupForm.className = "invalid";
          window.alert("invalid");
        }
        



});

  
//  Sign In Form Validation

signInForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();


var email = document.getElementById("email");
var password = document.getElementById("password");
  
 var passCount = 0;

// Check input is not empty and valid email format  
if(!validator.isEmpty(email.value) || validator.isEmailAddress(email.value)){
      passCount++;
}else{
    window.alert("Please enter valid email.");
}

// Check input is not empty and greater than 5 
if(!validator.isEmpty(password.value) || password.value.length >= 6){
       passCount++;   
}else{
  window.alert("Please enter valid password.");
}

// Check all input has been entered  
  if(passCount === 2) {
           window.alert("valid");
          signupForm.className = "valid"; 
        }
        else {
         
          signupForm.className = "invalid";
          window.alert("invalid");
        }
   
        
      

});

  
  //  Sign Up Form Validation
  
signupForm.addEventListener('submit', function (event) {

    // stop the event from its default action: submitting the form (for our validation, submission is not desired)

    event.preventDefault();
  

  
var firstName = document.getElementById("firstname");
  
var lastName = document.getElementById("lastname");
  
var email = document.getElementById("email");
  
var dob = document.getElementById("dob");
  
var password = document.getElementById("password");
  
 var passCount = 0;
  
 var d1 = new Date();
 var d2 = new Date(dob.value); 
var diffInMilliSec = Math.abs(d1.getTime() - d2.getTime());
 var milliSecInAday = 24 * 60 * 60 * 1000; //total milli-seconds in a day
 var age = Math.floor(diffInMilliSec/milliSecInAday);
 
// Check input is not empty and greater than 2 
if(!validator.isEmpty(firstName.value) && firstName.value.length >= 2){
    passCount++;

}else{
    window.alert("Please enter valid first name.");
}

// Check input is not empty and greater than 2 
if(!validator.isEmpty(lastName.value) && lastName.value.length >= 2){
    passCount++;

}else{
    window.alert("Please enter valid last name.");
}

// Check input is not empty and valid email format
if(!validator.isEmpty(email.value) && validator.isEmailAddress(email.value)){
      passCount++;
}else{
    window.alert("Please enter valid email.");
}

// Check input is not empty and greater than 5
if(!validator.isEmpty(password.value) && password.value.length >= 6){
       passCount++;   
}else{
    window.alert("Please enter valid password.");
}

// Check input is not empty 
if (validator.isEmpty(dob.value)){ 
 
 window.alert("Please enter valid date of birth.");
 
 }else{
       // window.alert(validator.isBeforeToday(dob.value));
   //window.alert(validator.isBeforeToday(age));
         if(validator.isBeforeToday(dob.value) && age >= 16){
           passCount++;
         }else{
            window.alert("You do not meet the minimum age.");
   }
  }

    
// Check all input has been entered    
 if(passCount === 5) {
           window.alert("valid");
          signupForm.className = "valid"; 
        }
        else {
         
          signupForm.className = "invalid";
          window.alert("invalid");
        }
      

});

  
  

};
