'use strict';
import AddNumbers from './sum';
import sumMethod from './sum';
import { test } from 'tape';


test(t => {
    let testArray = [-1,-3];
    let testSum: AddNumbers = new AddNumbers(testArray);
    t.equals(testSum.sumMethod(), -4);
    t.end();
  });