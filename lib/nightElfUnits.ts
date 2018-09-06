import WarcraftAbility from './WarcraftAbility';
import WarcraftUnit from './WarcraftUnit';

const hide: WarcraftAbility = {
  title: 'Hide',
  img: 'night_elf_hide.gif',
  abilityId: 'ashm',
  defaultHotkey: 'I',
};

const nightElfUnits: WarcraftUnit[] = [
  {
    img: 'night_elf_demon_hunter.gif',
    title: 'Demon Hunter',
    spells: [
      {
        title: 'Mana Burn',
        img: 'night_elf_demon_hunter_mana_burn.gif',
        abilityId: 'aemb',
        defaultHotkey: 'B',
      },
      {
        title: 'Immolation',
        img: 'night_elf_demon_hunter_immolation.gif',
        abilityId: 'aeim',
        defaultHotkey: 'L',
      },
      {
        title: 'Evasion',
        img: 'night_elf_demon_hunter_evasion.gif',
        abilityId: 'aeev',
        defaultHotkey: 'E',
      },
      {
        title: 'Metamorphosis',
        img: 'night_elf_demon_hunter_metamorphosis.gif',
        abilityId: 'aeme',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'night_elf_keeper.gif',
    title: 'Keeper of the Grove',
    spells: [
      {
        title: 'Entangling Roots',
        img: 'night_elf_keeper_entangling_roots.gif',
        abilityId: 'aeer',
        defaultHotkey: 'E',
      },
      {
        title: 'Force of Nature',
        img: 'night_elf_keeper_force_of_nature.gif',
        abilityId: 'aefn',
        defaultHotkey: 'F',
      },
      {
        title: 'Thorns Aura',
        img: 'night_elf_keeper_thorns_aura.gif',
        abilityId: 'aeah',
        defaultHotkey: 'R',
      },
      {
        title: 'Tranquility',
        img: 'night_elf_keeper_tranquility.gif',
        abilityId: 'aetq',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'night_elf_POTM.gif',
    title: 'Priestess of the Moon',
    spells: [
      hide,
      {
        title: 'Scout',
        img: 'night_elf_POTM_scout.gif',
        abilityId: 'aest',
        defaultHotkey: 'C',
      },
      {
        title: 'Searing Arrows',
        img: 'night_elf_POTM_searing_arrows.gif',
        abilityId: 'ahfa',
        defaultHotkey: 'R',
      },
      {
        title: 'Trueshot Aura',
        img: 'night_elf_POTM_trueshot_aura.gif',
        abilityId: 'aear',
        defaultHotkey: 'T',
      },
      {
        title: 'Starfall',
        img: 'night_elf_POTM_starfall.gif',
        abilityId: 'aesf',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'night_elf_warden.gif',
    title: 'Warden',
    spells: [
      hide,
      {
        title: 'Fan of Knives',
        img: 'night_elf_warden_fan_of_knives.gif',
        abilityId: 'aefk',
        defaultHotkey: 'F',
      },
      {
        title: 'Blink',
        img: 'night_elf_warden_blink.gif',
        abilityId: 'aebl',
        defaultHotkey: 'B',
      },
      {
        title: 'Shadow Strike',
        img: 'night_elf_warden_shadow_strike.gif',
        abilityId: 'aesh',
        defaultHotkey: 'D',
      },
      {
        title: 'Vengeance',
        img: 'night_elf_warden_vengeance.gif',
        abilityId: 'aesv',
        defaultHotkey: 'V',
      },
    ],
  },
  {
    img: 'night_elf_wisp.gif',
    title: 'Wisp',
    spells: [
      {
        title: 'Renew',
        img: 'night_elf_wisp_renew.gif',
        abilityId: 'aren',
        defaultHotkey: 'R',
      },
      {
        title: 'Gather',
        img: 'night_elf_wisp_gather.gif',
        abilityId: 'awha',
        defaultHotkey: 'G',
      },
      {
        title: 'Detonate',
        img: 'night_elf_wisp_detonate.gif',
        abilityId: 'adtn',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'night_elf_archer.gif',
    title: 'Archer',
    spells: [
      hide,
      {
        title: 'Mount Hippogryph',
        img: 'night_elf_archer_mount_hippogryph.gif',
        abilityId: 'aco2',
        defaultHotkey: 'U',
      },
    ],
  },
  {
    img: 'night_elf_huntress.gif',
    title: 'Huntress',
    spells: [
      hide,
      {
        title: 'Sentinel',
        img: 'night_elf_huntress_sentinel.gif',
        abilityId: 'aesn',
        defaultHotkey: 'E',
      },
    ],
  },
  {
    img: 'night_elf_dryad.gif',
    title: 'Dryad',
    spells: [
      {
        title: 'Abolish Magic',
        img: 'night_elf_dryad_abolish_magic.gif',
        abilityId: 'aadm',
        defaultHotkey: 'B',
      },
    ],
  },
  {
    img: 'night_elf_druid_of_the_claw.gif',
    title: 'Druid of the Claw',
    spells: [
      {
        title: 'Night Elf Form',
        img: 'night_elf_druid_of_the_claw_night_elf_form.gif',
        abilityId: 'abrf',
        defaultHotkey: 'F',
      },
      {
        title: 'Roar',
        img: 'night_elf_druid_of_the_claw_roar.gif',
        abilityId: 'acro',
        defaultHotkey: 'R',
      },
      {
        title: 'Rejuvenation',
        img: 'night_elf_druid_of_the_claw_rejuvenation.gif',
        abilityId: 'acr2',
        defaultHotkey: 'E',
      },
      {
        title: 'Bear Form',
        img: 'night_elf_druid_of_the_claw_bear_form.gif',
        abilityId: 'abrf',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'night_elf_mountain_giant.gif',
    title: 'Mountain Giant',
    spells: [
      {
        title: 'Taunt',
        img: 'night_elf_mountain_giant_taunt.gif',
        abilityId: 'atau',
        defaultHotkey: 'T',
      },
      {
        title: 'War Club',
        img: 'night_elf_mountain_giant_war_club.gif',
        abilityId: 'agra',
        defaultHotkey: 'W',
      },
    ],
  },
  {
    img: 'night_elf_hippogryph.gif',
    title: 'Hippogryph',
    spells: [
      {
        title: 'Pick up Archer',
        img: 'night_elf_hippogryph_pick_up_archer.gif',
        abilityId: 'aco3',
        defaultHotkey: 'U',
      },
    ],
  },
  {
    img: 'night_elf_druid_of_the_talon.gif',
    title: 'Druid of the Talon',
    spells: [
      {
        title: 'Night Elf Form',
        img: 'night_elf_druid_of_the_talon_night_elf_form.png',
        abilityId: 'arav',
        defaultHotkey: 'F',
      },
      {
        title: 'Faerie Fire',
        img: 'night_elf_druid_of_the_claw_faerie_fire.gif',
        abilityId: 'afae',
        defaultHotkey: 'R',
      },
      {
        title: 'Cyclone',
        img: 'night_elf_druid_of_the_talon_cyclone.gif',
        abilityId: 'acyc',
        defaultHotkey: 'C',
      },
      {
        title: 'Crow Form',
        img: 'night_elf_druid_of_the_talon_crow_form.gif',
        abilityId: 'arav',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'night_elf_faerie_dragon.gif',
    title: 'Faerie Dragon',
    spells: [
      {
        title: 'Phase Shift',
        img: 'night_elf_faerie_dragon_phase_shift.gif',
        abilityId: 'apsh',
        defaultHotkey: 'E',
      },
      {
        title: 'Mana Flare',
        img: 'night_elf_faerie_dragon_mana_flare.gif',
        abilityId: 'amfl',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'night_elf_create_building.png',
    title: 'Create Building',
    spells: [
      {
        title: 'Create Tree of Life',
        img: 'night_elf_create_tree_of_life.png',
        abilityId: 'etol',
        defaultHotkey: 'T',
      },
      {
        title: 'Create Moon Well',
        img: 'night_elf_create_moon_well.png',
        abilityId: 'emow',
        defaultHotkey: 'M',
      },
      {
        title: 'Create Altar of Elders',
        img: 'night_elf_create_altar_of_elders.png',
        abilityId: 'eate',
        defaultHotkey: 'A',
      },
      {
        title: 'Create Ancient of Wonders',
        img: 'night_elf_create_ancient_of_wonders.png',
        abilityId: 'eden',
        defaultHotkey: 'D',
      },
      {
        title: 'Create Hunter\'s Hall',
        img: 'night_elf_create_hunter\'s_hall.png',
        abilityId: 'edob',
        defaultHotkey: 'H',
      },
      {
        title: 'Create Ancient Protector',
        img: 'night_elf_create_ancient_protector.png',
        abilityId: 'etrp',
        defaultHotkey: 'P',
      },
      {
        title: 'Create Ancient of War',
        img: 'night_elf_create_ancient_of_war.png',
        abilityId: 'eaom',
        defaultHotkey: 'R',
      },
      {
        title: 'Create Ancient of Wind',
        img: 'night_elf_create_ancient_of_wind.png',
        abilityId: 'eaow',
        defaultHotkey: 'W',
      },
      {
        title: 'Create Ancient of Lore',
        img: 'night_elf_create_ancient_of_lore.png',
        abilityId: 'eaoe',
        defaultHotkey: 'L',
      },
      {
        title: 'Create Chimera Roost',
        img: 'night_elf_create_chimera_roost.png',
        abilityId: 'edos',
        defaultHotkey: 'C',
      },
    ],
  },
];

export default nightElfUnits;
