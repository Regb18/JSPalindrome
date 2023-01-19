// get Values + remove all spaces and punctuation
function getValues() {
    let originalString = document.getElementById('userString').value.toLowerCase('userString').replace(/\s/g, '').replace(/[^\w\s\']|_/g, "");

    let reversedString = reverseAString(originalString);

    let result = checkForPalindrome(originalString, reversedString);

    displayResults(result, reversedString);
}

// reverse string
function reverseAString(stringInput) {
    revString = '';

    for(let i = stringInput.length - 1; i >= 0; i--) {
        revString += stringInput[i];
    }
    return revString;
}

// compare string to original string
function checkForPalindrome(stringInput, revString) {
    if (stringInput == revString) {
        return true;
    } else {
        return false;
    }

}

// display string
function displayResults(trueOrFalse, revString) {
    
    if (trueOrFalse == true) {
        document.getElementById('alert').classList.remove('invisible', 'alert-danger');
        document.getElementById('alert').classList.add('alert-success');
        document.getElementById('results').innerText = revString + ' is a Palindrome!';
    } else {
        document.getElementById('alert').classList.remove('invisible', 'alert-success'); 
        document.getElementById('alert').classList.add('alert-danger');
        document.getElementById('results').innerText = revString + ' is not a Palindrome!';
}

}





// Function that uses a Loop to check the Palindrome *Does Not reverse a string

function getValuesLoop() {
    let originalString = document.getElementById('userString').value.toLowerCase('userString').replace(/\s/g, '').replace(/[^\w\s\']|_/g, "");

        let result = loopLetters(originalString);
    
        displayResultsLoop(result, originalString);

}


function loopLetters(stringInput) {
    let i = stringInput.length - 1;

    for(i; i > stringInput.length - (i + 1); i--) {
        

        if (stringInput[i] !=  stringInput[stringInput.length - (i + 1)]) {                

            return false;

        }
    }
    return true;
}


function displayResultsLoop(trueOrFalse, ogString) {
    
    if (trueOrFalse == true) {
        document.getElementById('alert').classList.remove('invisible', 'alert-danger');
        document.getElementById('alert').classList.add('alert-success');
        document.getElementById('results').innerText = ogString + ' is a Palindrome!';
    } else {
        document.getElementById('alert').classList.remove('invisible', 'alert-success'); 
        document.getElementById('alert').classList.add('alert-danger');
        document.getElementById('results').innerText = ogString + ' is Not a Palindrome!';
}

}