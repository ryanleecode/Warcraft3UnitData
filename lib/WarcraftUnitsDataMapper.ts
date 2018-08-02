import * as path from 'path';
import { WarcraftUnit } from '.';

const resourcesPath = path.join(__dirname, 'resources');

function mapImagePath(img: string) {
  return path.join(resourcesPath, img);
}

export default class WarcraftUnitsDataMapper {
  public map(data: WarcraftUnit[]): WarcraftUnit[] {
    return data.map((unit) => {
      const { img, title, spells } = unit;
      return ({
        img: mapImagePath(img),
        title,
        spells: spells.map((spell) => {
          const {
            title: abilityTitle,
            img: abilityImg,
            abilityId,
            defaultHotkey,
          } = spell;
          return ({
            title: abilityTitle,
            abilityId,
            defaultHotkey,
            img: mapImagePath(abilityImg),
          });
        }),
      });
    });
  }
}
