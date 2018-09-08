import WarcraftUnit from './WarcraftUnit';

const miscellaneous: WarcraftUnit[] = [
  {
    img: 'misc_arthas.png',
    title: 'Misc',
    spells: [
      {
        title: 'Set Hero Ability',
        img: 'misc_set_hero_ability.png',
        abilityId: 'cmdselectskill',
        defaultHotkey: 'O',
      },
      {
        title: 'Move',
        img: 'misc_move.png',
        abilityId: 'cmdmove',
        defaultHotkey: 'M',
      },
    ],
  },
];

export default miscellaneous;
