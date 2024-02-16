
// Caesar Cipher created in JavaScript 5 from Mr. Olin's Python script
// Created by Mr. Scouten and CISCO student Tyson Comfort
// Mr. Olin, if you are reading this, you're the GOAT. Also, say hi to Morgan Adams for me. She is family to me. 
// Oh, and just know, I almost joined your class. 

// Declaring message: "Dearest CISCO members! THIS IS A DECLARATION OF WAR! Hahahahah! Please don t hack us! SINCERELY! DMA"
// Original cipher alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_! (66 characters)

let finalText = ""; // Initialize the final decoded/encoded message here.

function Main(message, alphabet, shift) { // Main function for the encoder. Input the message to be encoded/deciphered, the alphabet needed to decipher, and your chosen shift.
// Note that several comments exist of former code. Please ignore.
    const alphabetInput = alphabet.split("") // Splits the argument alphabet into individual characters of its own array.
    let messageInput = message.split("") // Same as above, but for the input message.
    console.log(messageInput) // Testing to see if the messageInput acts as it should.
    console.log(shift) // Prints the shift number.
    for (let char = 0; char < messageInput.length; char++) { // For every character of the length of the message, it will do the following:
        if (alphabetInput.includes(messageInput[char]) == true) { // Checks to see if the character exists in the provided alphabetInput.
            finalText += alphabetInput[(alphabetInput.indexOf(messageInput[char])+ shift) % alphabetInput.length]
            // The cipher itself: Grabs the position of the message character within the provided alphabet, then adds the shift
            // Afterwards, if the new position of the character exceeds the total length of the inputted alphabet, a modulus calculation
            // is performed, which essentially acts as a wrap-around. Pac-man effect!
            console.log(finalText) // Well, if you cannot show the final deciphered/ciphered text, then WHAT HAS THIS ALL BEEN FOR?
        } else {
            finalText += " " // If the previously mentioned check fails, frick you, have a space. 
        }
    } 
}

// User input.

//Main("We have nothing to offer but blood, time, and sweat.", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
//Main("\"We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.\"\n- Winston Churchill,", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
//Main("For the next dark months, we will wage a war never seen by any force of man. For we are House Bool.", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
//Main("You may take our lives...", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
//Main("But you'll never take...", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
//Main("OUR FREEDOM!", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)
Main("GLORIA DOMUS BOOL!", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@$_!", 33)