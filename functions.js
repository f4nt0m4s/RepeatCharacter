console.log("test");
console.log(document.getElementById('iptValider'));

document.getElementById('iptValider').addEventListener('click', repeat);

// Repeat the string or character
function repeat() 
{
		console.log('Bouton valider !');
		// Récupération du texte
		/*let txtArea = document.getElementById('txtAreaId');
		let areaValue = null;
		// Récupération du compteur
		let counter = document.getElementById('countId');
		let counterValue = undefined;
		// Valeur à afficher
		let retValue = "";

		console.log("1-cpt :" + counter.value);

		areaValue = ( txtArea == null || txtArea == undefined || txtArea.value === "" ) ? "" : txtArea.value;
		counterValue = ( counter == null || counter == undefined || counter.value === "" ) ? 0 : counter.value;
		
		
		console.log("2-cpt:"+counterValue);
		console.log("area :" + areaValue);

		for(let i=0; i<counterValue; i++)
		{
			retValue += areaValue;
		}
		console.log("retValue : " + retValue);

		if ( retValue.length != 0 )
		{
			txtArea.value = retValue;
		}*/
}


/* Add one or more listeners to an element
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
	
addListenerMulti(window, 'keyup keypress', countCharacter);
//document.getElementsByTagName('textarea')[0].addEventListener('keyup', countCharacter);
//document.getElementsByTagName('textarea')[0].addEventListener('keypress', countCharacter);

function countCharacter()
{
	var lng = document.getElementsByTagName('textarea')[0].value.length;
	document.getElementById("charcount").innerHTML = lng + ' out of 400 characters';
}



// Light/Dark Mode

