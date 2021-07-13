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
        // const index = this.letters.match(new RegExp(letter, 'd'));
        let wordArray = word.split('');
        wordArray.map((letter)=>{
            this.letters = this.letters.replace(letter, '');
        });
    }
}