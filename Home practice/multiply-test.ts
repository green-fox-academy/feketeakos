'use strict';
import test from "tape"
import multiply from './multiply'

test(t => {
    let testMatrix: number[][] =
        [
            [1, 3, 6, 2],
            [7, 5, 6, 1],
            [3, 3, 1, 5],
            [9, 0, 5, 3]
        ]
    let newMatrix: number[][] =
        [
            [1, 3, 12, 4],
            [14, 10, 6, 2],
            [3, 3, 1, 5],
            [18, 0, 10, 6]
        ]

    t.deepEqual(multiply(testMatrix), newMatrix);

    t.end();
});
