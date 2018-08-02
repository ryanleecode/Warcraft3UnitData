"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var humanUnits_1 = require("./humanUnits");
var WarcraftUnitsDataMapper_1 = require("./WarcraftUnitsDataMapper");
var dataMapper = new WarcraftUnitsDataMapper_1.default();
var mappedHumanUnits = dataMapper.map(humanUnits_1.default);
exports.humanUnits = mappedHumanUnits;
