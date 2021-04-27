"use strict";

function checkInputsError()
{
	let txtArea = document.getElementById('txtAreaId');
	let counter = document.getElementById('countId');

	if ( txtArea.value === "" || txtArea.value.length == 0 )
	{
		txtArea.className  += ' border-3 rounded border-danger ';
		return false;
	}

	if ( counter.value === "" || counter.value.length == 0 )
	{
		counter.className  += ' border-1 rounded border-danger ';
		return false;
	}

	return true;
}

// Repeat the string or character
function repeat()
{	
	if ( !checkInputsError() )
	{
		return;
	}

	//console.log('Bouton valider !');
	// Récupération du texte
	let txtArea = document.getElementById('txtAreaId');
	let areaValue = null;
	// Récupération du compteur
	let counter = document.getElementById('countId');
	let counterValue = null;

	// Valeur à afficher
	let retValue = ""; //( txtArea == null || txtArea == undefined ) ? "" : txtArea.value;
	areaValue = ( txtArea == null || txtArea == undefined ) ? "" : txtArea.value;
	counterValue = ( counter == null || counter == undefined || counter.value === "" ) ? 0 : counter.value;
	
	let lengthTextTyped = areaValue.length;
	if ( lengthTextTyped != 0 )
	{
		for(let i=0; i<counterValue; i++)
		{
			retValue += areaValue;
		}

		let lengthText = retValue.length;
		//console.log(lengthText);
		if ( lengthText != 0 )
		{
			//console.log("yes : " + retValue)
			document.getElementById('txtAreaId').value = retValue;
		}
	}
}


/* 
	Add one or more listeners to an element
	** @param {DOMElement} element - DOM element to add listeners to
	** @param {string} eventNames - space separated list of event names, e.g. 'click change'
	** @param {Function} listener - function to attach for each event as a listener
	* src : https://stackoverflow.com/questions/8796988/binding-multiple-events-to-a-listener-without-jquery
*/
function addListenerMulti(element, eventNames, listener) {
	var events = eventNames.split(' ');
	for (var i=0, iLen=events.length; i<iLen; i++) {
		element.addEventListener(events[i], listener, false);
	}
}

// Counter to count characters typed
function countCharacter()
{
	var lng = document.getElementsByTagName('textarea')[0].value.length;
	let sCarac = "caractère";
	sCarac += (lng>1) ? "s" : "";
	document.getElementById("charcount").innerHTML = lng + " " + sCarac;
}


/** 
	* Copy text
	* source : https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
*/
function copyText()
{
	let copyText = document.getElementById("txtAreaId");
	
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	  
	/* Copy the text inside the text field */
	document.execCommand("copy");
}


// Call to functions
document.getElementById('iptValider').addEventListener('click', repeat);
addListenerMulti(window, 'keyup keypress', countCharacter);
document.getElementById('btnCopy').addEventListener('click', copyText);
