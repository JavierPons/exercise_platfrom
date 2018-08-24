function game(guess){

    var num = Math.floor(Math.random()* 100)+1;
    alert `Wellcome to Guess Number Game \n  You have 5 oportunities of guess number between 0 - 100`;
    for (var i = 1 ; i < 6; i++ ) {
    var myPrompt = prompt('Guess a number', 'Between 0 - 100');

    if(myPrompt > num) {
        console.log('This number is greater!');
        }else if(myPrompt < num) {
            console.log('This number is smaller!')
        }else if(myPrompt == num) {
            console.log('Ganaste!');
        }
    }
    console.log('Perdiste');
    console.log(`El número era ${myPrompt}`);

}
