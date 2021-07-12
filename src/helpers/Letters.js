export default {
    letters: "ABCDEFGHIJKLMNOPQRSUVWXYZ",
    howMany(letter) {
        const count = this.letters.match(new RegExp(letter, 'g'));
        return count ? count.length : 0;
    }
}