export default {
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    howMany(letter) {
        const count = this.letters.match(new RegExp(letter, 'g'));
        return count ? count.length : 0;
    },
    add(letter) {
        this.letters += letter;
    },
    subtract(word){
        let wordArray = word.split('');
        wordArray.map((letter)=>{
            this.letters = this.letters.replace(letter, '');
        });
    },
    wordColour(word){
        let wordArray = word.split('');
        return wordArray.map((letter)=>{
            if(this.howMany(letter) > 0) {
                return <div className="gold">{letter}</div>
            } else {
                return <div className="grey">{letter}</div>
            }
        });
    }
}