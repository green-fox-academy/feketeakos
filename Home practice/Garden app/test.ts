'use strict';

import Garden from './garden';
import Plants from './plants';

let myGarden: Garden = new Garden();
myGarden.plantAdder();
myGarden.getWaterInfo();
myGarden.watering(40);
myGarden.getWaterInfo();
myGarden.watering(70);
myGarden.getWaterInfo();