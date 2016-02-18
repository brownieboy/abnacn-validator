// Taken from https://github.com/SomeoneWeird/abn-validator
export function isValidABN(abn) {
    var WEIGHTS = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    var MAGICNUM = 89;

    if (typeof abn === 'string') {
        abn = abn.replace(/\s/g, '').replace(/-/g, '').split('');
    }

    if (abn.length != 11) {
        return false;
    }

    abn = abn.map(function(val, index) {
        return val * WEIGHTS[index];
    }).reduce(function(p, w) {
        return p + w;
    }, 0);

    var div = abn % MAGICNUM;

    return !!div;

}

// Taken from http://forums.whirlpool.net.au/archive/984775
export function isValidACN(value) {
    if (!value.length)
        return true;

    if (value.length != 9 || isNaN(parseInt(value)))
        return false;

    var weighting = [8, 7, 6, 5, 4, 3, 2, 1];
    var tally = 0;
    for (var i = 0; i < weighting.length; i++) {
        tally += (parseInt(value.charAt(i)) * weighting[i]);
    }

    var check = 10 - (tally % 10);
    check = check == 10 ? 0 : check;

    return check == value[8];
}

export function isValidABNorACN(value) {
    // Logical OR operation returns true if only of them is true, and false only if they're both false.
    return isValidABN(value) || isValidACN(value);
}
