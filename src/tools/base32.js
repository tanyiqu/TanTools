let BASE32CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

var getEncodeString = function (srcString) {
    //var srcString = 'abc';

    var i = 0;
    var index = 0;
    var digit = 0;
    var currByte;
    var nextByte;
    var retrunString = '';

    for (var i = 0; i < srcString.length;) {
        //var          index    = 0;
        currByte = (srcString.charCodeAt(i) >= 0) ? srcString.charCodeAt(i) :
            (srcString.charCodeAt(i) + 256);

        if (index > 3) {
            if ((i + 1) < srcString.length) {
                nextByte = (srcString.charCodeAt(i + 1) >= 0) ?
                    srcString.charCodeAt(i + 1) :
                    (srcString.charCodeAt(i + 1) + 256);
            } else {
                nextByte = 0;
            }

            digit = currByte & (0xFF >> index);
            index = (index + 5) % 8;
            digit <<= index;
            digit |= (nextByte >> (8 - index));
            i++;
        } else {
            digit = (currByte >> (8 - (index + 5))) & 0x1F;
            index = (index + 5) % 8;

            if (index == 0) {
                i++;
            }
        }

        retrunString = retrunString + BASE32CHAR.charAt(digit);
    }
    return retrunString.toLowerCase();
}

let BASE32LOOOKUP = [
    0xFF, 0xFF, 0x1A, 0x1B, 0x1C, 0x1D, 0x1E, 0x1F, // '0', '1', '2', '3', '4', '5', '6', '7'
    0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, // '8', '9', ':', ';', '<', '=', '>', '?'
    0xFF, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, // '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G'
    0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, // 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'
    0x0F, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, // 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W'
    0x17, 0x18, 0x19, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, // 'X', 'Y', 'Z', '[', '\', ']', '^', '_'
    0xFF, 0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, // '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g'
    0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, // 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'
    0x0F, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, // 'p', 'q', 'r', 's', 't', 'u', 'v', 'w'
    0x17, 0x18, 0x19, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF
];

var getDecodeString = function (encodeString) {
    var i;
    var index;
    var lookup;
    var offset;
    var digit;
    var encodeString = encodeString.toUpperCase();
    var stringLen = parseInt((encodeString.length * 5) / 8);
    var bytes = new Array(stringLen);
    for (var a = 0; a < stringLen; a++) {
        bytes[a] = 0;
    }

    for (i = 0, index = 0, offset = 0; i < encodeString.length; i++) {
        var charCode0 = '0'.charCodeAt(0);
        lookup = encodeString.charCodeAt(i) - charCode0;

        if ((lookup < 0) || (lookup >= BASE32LOOOKUP.length)) {
            continue;
        }

        digit = BASE32LOOOKUP[lookup];

        if (digit == 0xFF) {
            continue;
        }

        if (index <= 3) {
            index = (index + 5) % 8;

            if (index == 0) {
                bytes[offset] = bytes[offset] | digit;

                offset++;

                if (offset >= bytes.length) {
                    break;
                }
            } else {
                bytes[offset] = bytes[offset] | (digit << (8 - index));

            }
        } else {
            index = (index + 5) % 8;
            bytes[offset] = bytes[offset] | (digit >>> index);

            offset++;

            if (offset >= bytes.length) {
                break;
            }

            bytes[offset] = bytes[offset] | (digit << (8 - index));
            if (bytes[offset] >= 256) {

                //var lp = parseInt(bytes[offset]/256);

                bytes[offset] %= 256;
            }
        }
    }

    //return bytes.join(',');
    var realkeyString = '';
    var decodeString = '';
    for (var a = 0; a < bytes.length; a++) {

        var realkey = String.fromCharCode(bytes[a]);
        realkeyString += realkey;
        //decodeString += bytes[a];

    }
    return realkeyString;

}