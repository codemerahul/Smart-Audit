/**
 * Created by Rahul Singh
 */

function ShuffleArray(array) {
    var i = array.length, j, temp;
    while (--i > 0) {
        // getting random nr. as per array size.
        j = Math.floor(Math.random() * (i + 1));
        temp = array[j];   // replacing both values tmp and index values.
        array[j] = array[i];
        array[i] = temp;
    }
    return array;
}