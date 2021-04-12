console.log("test");
console.log(document.getElementById('iptValider'));
document.getElementById('iptValider').addEventListener('click', generate);

function generate() {
    console.log('Bouton valider !');
    let txtAreaValue = document.getElementsByTagName('textarea')[0].value;
    console.log('test 2 ' + txtArea);
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