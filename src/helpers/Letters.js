export default {
    //string or "alphabet" of currently available letters
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZAEIOUABCDEFGHIJKLMNOPQRSTUVWXYZAEIOUAEIOU",
    howMany(letter) {
        const count = this.letters.match(new RegExp(letter, 'g'));
        return count ? count.length : 0;
    },
    //adds the given letters to the alphabet
    add(letter) {
        this.letters += letter;
    },
    //removes all the letters of the given word from the alphabet
    subtract(word){
        let wordArray = word.split('');
        wordArray.map((letter)=>{
            this.letters = this.letters.replace(letter, '');
        });
    },
    //takes in a word and returns the letters styled grey if they are missing
    wordColour(word){
        let wordArray = word.split('');
        return wordArray.map((letter)=>{
            if(this.howMany(letter) > 0) {
                return <div>{letter}</div>
            } else {
                return <div className="grey">{letter}</div>
            }
        });
    }
}