String.prototype.reverse = function() {
    let charArray = this.split('');
    let charRevers = charArray.reverse();
    let strRevers = charRevers.join('');

    return strRevers;
}

let str = "hello this is a string";
alert(str.reverse());