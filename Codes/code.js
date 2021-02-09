

function Well(){


alert("Please answer the following question.");

var Pname = prompt("Please enter your name", "Nobody");


 if (Pname == "Nobody") {
Pname = prompt("We need your name, dear visitor!");}


 else if(Pname.toLowerCase() == "amjad"){
 	alert("Hello Mr.Amjad! Hope you are doing great!");}

else if (Pname != null) {

  alert("Hello " + Pname + "! How are you today?");}


  var Age = prompt("How old are you ?", "0");

  if (Age == "0") {
Age = prompt("Tell us yor age,please");}


 else if(Age <0 || Age >100){
 	Age = prompt("Please tell us your real age");}

else if (Age != null) {

  alert("Thank you!");}

alert("Name: "+Pname + " | Age: " +Age);



}



function usrProceed ()
{

	do{
    question = prompt("Please Say 'Hello' to proceed");
}while(question == null || question == "" || question.toLowerCase() !== "hello" );


		alert("Welcome!");
	}



