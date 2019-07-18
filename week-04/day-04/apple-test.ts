'use strict';
import { test } from 'tape';

import Apple from './apple';




test(t => {
    let newApple: Apple = new Apple();
    newApple.getApple();
    t.equals(newApple.getApple(), "apple");
    t.end();
});