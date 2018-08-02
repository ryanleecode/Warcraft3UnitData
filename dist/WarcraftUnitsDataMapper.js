"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var resourcesPath = path.join(__dirname, 'resources');
function mapImagePath(img) {
    return path.join(resourcesPath, img);
}
var WarcraftUnitsDataMapper = /** @class */ (function () {
    function WarcraftUnitsDataMapper() {
    }
    WarcraftUnitsDataMapper.prototype.map = function (data) {
        return data.map(function (unit) {
            var img = unit.img, title = unit.title, spells = unit.spells;
            return ({
                img: mapImagePath(img),
                title: title,
                spells: spells.map(function (spell) {
                    var abilityTitle = spell.title, abilityImg = spell.img, abilityId = spell.abilityId, defaultHotkey = spell.defaultHotkey;
                    return ({
                        title: abilityTitle,
                        abilityId: abilityId,
                        defaultHotkey: defaultHotkey,
                        img: mapImagePath(abilityImg),
                    });
                }),
            });
        });
    };
    return WarcraftUnitsDataMapper;
}());
exports.default = WarcraftUnitsDataMapper;
