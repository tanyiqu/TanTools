function StringBuffer() {
    this.array = new Array();
}

StringBuffer.prototype.append = function (value) {
    this.array[this.array.length] = value;
    return this;
}

StringBuffer.prototype.toString = function () {
    var _string = this.array.join("");
    return _string;
}

const Conversion = {

    // 转成小写
    toLower: (str) => {
        let res = new StringBuffer();
        for (let char of str) {
            let num = char.charCodeAt();
            if (num >= 65 && num <= 90) {
                res.append(String.fromCharCode(num + 32));
                continue;
            }
            res.append(char);
        }
        return res.toString();
    },


    // 转成大写
    toUpper: (str) => {
        let res = new StringBuffer();
        for (let char of str) {
            let num = char.charCodeAt();
            if (num >= 97 && num <= 122) {
                res.append(String.fromCharCode(num - 32));
                continue;
            }
            res.append(char);
        }
        return res.toString();
    }
}

export default Conversion;