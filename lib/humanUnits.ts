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
    img: 'human_bloodmage.png',
    title: 'Blood Mage',
    spells: [
      {
        title: 'Flame Strike',
        img: 'human_bloodmage_flame_strike.gif',
        abilityId: 'AHfs',
        defaultHotkey: 'F',
      },
      {
        title: 'Banish',
        img: 'human_bloodmage_banish.gif',
        abilityId: 'AHbn',
        defaultHotkey: 'B',
      },
      {
        title: 'Siphon Mana',
        img: 'human_bloodmage_siphon_mana.gif',
        abilityId: 'AHdr',
        defaultHotkey: 'N',
      },
      {
        title: 'Summon Phoenix',
        img: 'human_bloodmage_summon_phoenix.gif',
        abilityId: 'AHpx',
        defaultHotkey: 'X',
      },
    ],
  },
  {
    img: 'human_peasant.gif',
    title: 'Peasant',
    spells: [
      {
        title: 'Repair',
        img: 'human_peasant_repair.gif',
        abilityId: 'ahrp',
        defaultHotkey: 'R',
      },
      {
        title: 'Gather',
        img: 'human_peasant_gather.gif',
        abilityId: 'ahar',
        defaultHotkey: 'G',
      },
      {
        title: 'Call To Arms',
        img: 'human_peasant_call_to_arms.gif',
        abilityId: 'amic',
        defaultHotkey: 'C',
      },
    ],
  },
  {
    img: 'human_footman.gif',
    title: 'Footman',
    spells: [
      {
        title: 'Defend',
        img: 'human_footman_defend.gif',
        abilityId: 'adef',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'human_priest.gif',
    title: 'Priest',
    spells: [
      {
        title: 'Heal',
        img: 'human_priest_heal.gif',
        abilityId: 'ahea',
        defaultHotkey: 'E',
      },
      {
        title: 'Dispel Magic',
        img: 'human_priest_dispel_magic.gif',
        abilityId: 'adis',
        defaultHotkey: 'D',
      },
      {
        title: 'Inner Fire',
        img: 'human_priest_inner_fire.gif',
        abilityId: 'ainf',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'human_sorceress.gif',
    title: 'Sorceress',
    spells: [
      {
        title: 'Slow',
        img: 'human_sorceress_slow.gif',
        abilityId: 'aslo',
        defaultHotkey: 'W',
      },
      {
        title: 'Invisibility',
        img: 'human_sorceress_invisibility.gif',
        abilityId: 'aivs',
        defaultHotkey: 'I',
      },
      {
        title: 'Polymorph',
        img: 'human_sorceress_polymorph.gif',
        abilityId: 'aply',
        defaultHotkey: 'O',
      },
    ],
  },
  {
    img: 'human_spell_breaker.gif',
    title: 'Spell Breaker',
    spells: [
      {
        title: 'Spell Steal',
        img: 'human_spell_breaker_spell_steal.gif',
        abilityId: 'asps',
        defaultHotkey: 'T',
      },
      {
        title: 'Control Magic',
        img: 'human_spell_breaker_control_magic.gif',
        abilityId: 'acmg',
        defaultHotkey: 'C',
      },
    ],
  },
  {
    img: 'human_mortar_team.gif',
    title: 'Mortar Team',
    spells: [
      {
        title: 'Flare',
        img: 'human_mortar_team_flare.gif',
        abilityId: 'afla',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'human_dragonhawk_rider.gif',
    title: 'Dragonhawk Rider',
    spells: [
      {
        title: 'Cloud',
        img: 'human_dragonhawk_rider_cloud.gif',
        abilityId: 'aclf',
        defaultHotkey: 'C',
      },
      {
        title: 'Aerial Shackles',
        img: 'human_dragonhawk_rider_aerial_shackles.gif',
        abilityId: 'amls',
        defaultHotkey: 'E',
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
