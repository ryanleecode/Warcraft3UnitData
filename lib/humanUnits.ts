import WarcraftUnit from './WarcraftUnit';

const humanUnits: WarcraftUnit[] = [
  {
    img: 'human_archmage.png',
    title: 'Archmage',
    spells: [
      {
        title: 'Blizzard',
        img: 'human_archmage_blizzard.png',
        abilityId: 'ahbz',
        defaultHotkey: 'B',
      },
      {
        title: 'Summon Water Elemental',
        img: 'human_archmage_summon_water_elemental.png',
        abilityId: 'ahwe',
        defaultHotkey: 'W',
      },
      {
        title: 'Brilliance Aura',
        img: 'human_archmage_brilliance_aura.png',
        abilityId: 'ahab',
        defaultHotkey: 'R',
      },
      {
        title: 'Mass Teleport',
        img: 'human_archmage_mass_teleport.png',
        abilityId: 'ahmt',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'human_mountain_king.png',
    title: 'Mountain King',
    spells: [
      {
        title: 'Storm Bolt',
        img: 'human_mountain_king_storm_bolt.gif',
        abilityId: 'AHtb',
        defaultHotkey: 'T',
      },
      {
        title: 'Thunder Clap',
        img: 'human_mountain_king_thunder_clap.gif',
        abilityId: 'AHtc',
        defaultHotkey: 'C',
      },
      {
        title: 'Bash',
        img: 'human_mountain_king_bash.gif',
        abilityId: 'AHbh',
        defaultHotkey: 'B',
      },
      {
        title: 'Avatar',
        img: 'human_mountain_king_avatar.gif',
        abilityId: 'AHav',
        defaultHotkey: 'V',
      },
    ],
  },
  {
    img: 'human_paladin.png',
    title: 'Paladin',
    spells: [
      {
        title: 'Holy Light',
        img: 'human_paladin_holy_light.png',
        abilityId: 'AHhb',
        defaultHotkey: 'T',
      },
      {
        title: 'Divine Shield',
        img: 'human_paladin_divine_shield.png',
        abilityId: 'AHds',
        defaultHotkey: 'D',
      },
      {
        title: 'Devotion Aura',
        img: 'human_paladin_devotion_aura.png',
        abilityId: 'AHad',
        defaultHotkey: 'V',
      },
      {
        title: 'Resurrection',
        img: 'human_paladin_resurrection.png',
        abilityId: 'AHre',
        defaultHotkey: 'R',
      },
    ],
  },
  {
    img: 'human_town_hall.png',
    title: 'Town Hall',
    spells: [
      {
        title: 'Train Peasant',
        img: 'human_peasant.png',
        abilityId: 'hpea',
        defaultHotkey: 'P',
      },
      {
        title: 'Research Backpack',
        img: 'misc_backpack.png',
        abilityId: 'rhpm',
        defaultHotkey: 'B',
      },
      {
        title: 'Upgrade to Keep',
        img: 'human_keep.png',
        abilityId: 'hkee',
        defaultHotkey: 'U',
      },
      {
        title: 'Call to Arms',
        img: 'human_call_to_arms.png',
        abilityId: 'amic',
        defaultHotkey: 'C',
      },
      {
        title: 'Back to Work',
        img: 'human_back_to_work.png',
        abilityId: 'amic',
        defaultHotkey: 'W',
      },
    ],
  },
];

export default humanUnits;
