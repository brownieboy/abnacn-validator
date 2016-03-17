// Taken from Truffala's formula at:
// http://stackoverflow.com/questions/14174738/regex-to-match-australian-business-number-abn
export function isValidABN(str) {
    str = str.replace(/[ _]/g, '');

    if (!str || str.length !== 11) {
        return false;
    }
    var weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        checksum = str.split('').map(Number).reduce(
            function(total, digit, index) {
                if (!index) {
                    digit--;
                }
                return total + (digit * weights[index]);
            },
            0
        );

    if (!checksum || checksum % 89 !== 0) {
        return false;
    }

    return true;
}


// Taken from Worldspawn's post on http://forums.whirlpool.net.au/archive/984775
export function isValidACN(acn) {
    // Strip off white space
    if (typeof acn === 'string') {
        acn = acn.replace(/\s/g, '').replace(/-/g, '');
    }

    if (acn.length != 9 || isNaN(parseInt(acn)))
        return false;

    var weighting = [8, 7, 6, 5, 4, 3, 2, 1];
    var tally = 0;
    for (var i = 0; i < weighting.length; i++) {
        tally += (parseInt(acn.charAt(i)) * weighting[i]);
    }

    var check = 10 - (tally % 10);
    check = check == 10 ? 0 : check;

    return check == acn[8];
}

export function isValidABNorACN(value) {
    // Logical OR operation returns true if only of them is true, and false only if they're both false.
    return isValidABN(value) || isValidACN(value);
}
