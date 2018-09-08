import WarcraftUnit from './WarcraftUnit';

const neutralUnits: WarcraftUnit[] = [
  {
    img: 'neutral_naga_sea_witch.gif',
    title: 'Naga Sea Witch',
    spells: [
      {
        title: 'Forked Lightning',
        img: 'neutral_naga_sea_witch_forked_lightning.gif',
        abilityId: 'anfl',
        defaultHotkey: 'F',
      },
      {
        title: 'Frost Arrows',
        img: 'neutral_naga_sea_witch_frost_arrows.gif',
        abilityId: 'anfa',
        defaultHotkey: 'R',
      },
      {
        title: 'Mana Shield',
        img: 'neutral_naga_sea_witch_mana_shield.gif',
        abilityId: 'anms',
        defaultHotkey: 'N',
      },
      {
        title: 'Tornado',
        img: 'neutral_naga_sea_witch_tornado.gif',
        abilityId: 'anto',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'neutral_dark_ranger.gif',
    title: 'Dark Ranger',
    spells: [
      {
        title: 'Silence',
        img: 'neutral_dark_ranger_silence.gif',
        abilityId: 'ansi',
        defaultHotkey: 'E',
      },
      {
        title: 'Black Arrow',
        img: 'neutral_dark_ranger_black_arrow.gif',
        abilityId: 'anba',
        defaultHotkey: 'B',
      },
      {
        title: 'Life Drain',
        img: 'neutral_dark_ranger_life_drain.gif',
        abilityId: 'andr',
        defaultHotkey: 'D',
      },
      {
        title: 'Charm',
        img: 'neutral_dark_ranger_charm.gif',
        abilityId: 'anch',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'neutral_pandaren_brewmaster.gif',
    title: 'Pandaren Brewmaster',
    spells: [
      {
        title: 'Breath Of Fire',
        img: 'neutral_pandaren_brewmaster_breath_of_fire.gif',
        abilityId: 'anbf',
        defaultHotkey: 'F',
      },
      {
        title: 'Drunken Haze',
        img: 'neutral_pandaren_brewmaster_drunken_haze.gif',
        abilityId: 'andh',
        defaultHotkey: 'D',
      },
      {
        title: 'Drunken Brawler',
        img: 'neutral_pandaren_brewmaster_drunken_brawler.gif',
        abilityId: 'andb',
        defaultHotkey: 'B',
      },
      {
        title: 'Storm Earth And Fire',
        img: 'neutral_pandaren_brewmaster_storm_earth_and_fire.gif',
        abilityId: 'anef',
        defaultHotkey: 'E',
      },
    ],
  },
  {
    img: 'neutral_beastmaster.gif',
    title: 'Beastmaster',
    spells: [
      {
        title: 'Summon Bear',
        img: 'neutral_beastmaster_summon_bear.gif',
        abilityId: 'ANsg',
        defaultHotkey: 'B',
      },
      {
        title: 'Summon Quilbeast',
        img: 'neutral_beastmaster_summon_quilbeast.gif',
        abilityId: 'ANsq',
        defaultHotkey: 'Q',
      },
      {
        title: 'Summon Hawk',
        img: 'neutral_beastmaster_summon_hawk.gif',
        abilityId: 'ANsw',
        defaultHotkey: 'W',
      },
      {
        title: 'Stampede',
        img: 'neutral_beastmaster_stampede.gif',
        abilityId: 'ANst',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'neutral_pit_lord.gif',
    title: 'Pit Lord',
    spells: [
      {
        title: 'Rain of Fire',
        img: 'neutral_pit_lord_rain_of_fire.gif',
        abilityId: 'anrf',
        defaultHotkey: 'F',
      },
      {
        title: 'Howl of Terror',
        img: 'neutral_pit_lord_howl_of_terror.gif',
        abilityId: 'anht',
        defaultHotkey: 'T',
      },
      {
        title: 'Cleaving Attack',
        img: 'neutral_pit_lord_cleaving_attack.gif',
        abilityId: 'anca',
        defaultHotkey: 'C',
      },
      {
        title: 'Doom',
        img: 'neutral_pit_lord_doom.gif',
        abilityId: 'ando',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'neutral_tinker.gif',
    title: 'Tinker',
    spells: [
      {
        title: 'Pocket Factory',
        img: 'neutral_tinker_pocket_factory.gif',
        abilityId: 'ans3',
        defaultHotkey: 'F',
      },
      {
        title: 'Cluster Rockets',
        img: 'neutral_tinker_cluster_rockets.gif',
        abilityId: 'anc3',
        defaultHotkey: 'R',
      },
      {
        title: 'Engineering Upgrade',
        img: 'neutral_tinker_engineering_upgrade.gif',
        abilityId: 'aneg',
        defaultHotkey: 'E',
      },
      {
        title: 'Robo-Goblin',
        img: 'neutral_tinker_robo_goblin.gif',
        abilityId: 'anrg',
        defaultHotkey: 'B',
      },
    ],
  },
  {
    img: 'neutral_firelord.gif',
    title: 'Firelord',
    spells: [
      {
        title: 'Soul Burn',
        img: 'neutral_firelord_soul_burn.gif',
        abilityId: 'anso',
        defaultHotkey: 'B',
      },
      {
        title: 'Summon Lava Spawn',
        img: 'neutral_firelord_lava_spawn.gif',
        abilityId: 'anc3',
        defaultHotkey: 'W',
      },
      {
        title: 'Incinerate',
        img: 'neutral_firelord_incinerate.gif',
        abilityId: 'ania',
        defaultHotkey: 'C',
      },
      {
        title: 'Volcano',
        img: 'neutral_firelord_volcano.gif',
        abilityId: 'anvc',
        defaultHotkey: 'V',
      },
    ],
  },
  {
    img: 'neutral_alchemist.gif',
    title: 'Alchemist',
    spells: [
      {
        title: 'Healing Spray',
        img: 'neutral_alchemist_healing_spray.gif',
        abilityId: 'anhs',
        defaultHotkey: 'E',
      },
      {
        title: 'Chemical Rage',
        img: 'neutral_alchemist_chemical_rage.gif',
        abilityId: 'ancr',
        defaultHotkey: 'R',
      },
      {
        title: 'Acid Bomb',
        img: 'neutral_alchemist_acid_bomb.gif',
        abilityId: 'anab',
        defaultHotkey: 'B',
      },
      {
        title: 'Transmute',
        img: 'neutral_alchemist_transmute.gif',
        abilityId: 'antm',
        defaultHotkey: 'T',
      },
    ],
  },
];

export default neutralUnits;
