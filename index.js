// Code your solutions in this file
function writeCards(stringName, eventName) {
    const messages = []
    for (let i = 0; i < stringName.length; i++) {
        messages.push(`Thank you, ${stringName[i]}, for the wonderful ${eventName} gift!`);
    }
    return messages;

}

function countDown(integer){
    while (integer > -1) {
        console.log(integer--)
    }

} 