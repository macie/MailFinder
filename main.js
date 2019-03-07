// ==UserScript==
// @name     Mail Fetcher
// @version  1
// @grant    none
// ==/UserScript==
/*
	The Mail Fetcher is a simple script to find email list on a website by using regular expressions.
  The code below is divided by section: to load page html, to use regular expression to find email list, to save in easy to copy form.
  Good luck and have fun.
*/


// Loading entire HTML included in body of the page.
var LoadedHTML = document.getElementsByTagName("body")[0].innerHTML;


// Definition of the regular expression which represent email adress.
var regex =/([A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+)/g;

// Using match() to fetch for regular expression. Here is essential function of finding list of emails.
var myMails = LoadedHTML.match(regex);
let uniqueMails = [...new Set(myMails)];
    
// Easy to copy version of list of emails made by match().
//var listOfMails = myMails.split(",");
var i;
var text = "";
for (i = 0; i < uniqueMails.length; i++) 
{
  text += uniqueMails[i] + "<br>";
} 


document.getElementsByTagName("body")[0].innerHTML = text;

/*
if(mails)
{
  console.log(mails);
}
  */
