a=' bottles of beer'
b=' on the wall'
c='o more'

for (x = 99; x >= 0; x--) {
    if (x) {
        console.log(x + a + b + ', ' + x + a + '.');
        console.log('Take one down and pass it around, ' + ((x-1)?(x-1):'n'+c) + a + b + '.\n');
    } else {
        console.log('N' + c + a + b + ', ' + 'n' + c + a + '.');
        console.log('Go to the store and buy some more, 99' + a + b + '.');
    }
}


/*

99 bottles of beer on the wall, 99 bottles of beer.
Take one down and pass it around, 98 bottles of beer on the wall.
98 bottles of beer on the wall, 98 bottles of beer.
Take one down and pass it around, 97 bottles of beer on the wall.

*/