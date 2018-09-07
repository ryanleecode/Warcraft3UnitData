import WarcraftUnit from './WarcraftUnit';

const burrow = {
  title: 'Burrow',
  img: 'undead_crypt_fiend_burrow.gif',
  abilityId: 'abur',
  defaultHotkey: 'B',
};

const cannibalize = {
  title: 'Cannibalize',
  img: 'undead_ghoul_cannibalize.gif',
  abilityId: 'acan',
  defaultHotkey: 'C',
};

const undeadUnits: WarcraftUnit[] = [
  {
    img: 'undead_death_knight.gif',
    title: 'Death Knight',
    spells: [
      {
        title: 'Death Coil',
        img: 'undead_death_knight_death_coil.gif',
        abilityId: 'audc',
        defaultHotkey: 'C',
      },
      {
        title: 'Death Pact',
        img: 'undead_death_knight_death_pact.gif',
        abilityId: 'audp',
        defaultHotkey: 'E',
      },
      {
        title: 'Unholy Aura',
        img: 'undead_death_knight_unholy_aura.gif',
        abilityId: 'auau',
        defaultHotkey: 'U',
      },
      {
        title: 'Animate Dead',
        img: 'undead_death_knight_animate_dead.gif',
        abilityId: 'auan',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'undead_dreadlord.gif',
    title: 'Dreadlord',
    spells: [
      {
        title: 'Carrion Swarm',
        img: 'undead_dreadlord_carrion_swarm.gif',
        abilityId: 'aucs',
        defaultHotkey: 'C',
      },
      {
        title: 'Sleep',
        img: 'undead_dreadlord_sleep.gif',
        abilityId: 'ausl',
        defaultHotkey: 'E',
      },
      {
        title: 'Vampiric Aura',
        img: 'undead_dreadlord_vampiric_aura.gif',
        abilityId: 'auav',
        defaultHotkey: 'V',
      },
      {
        title: 'Inferno',
        img: 'undead_dreadlord_inferno.gif',
        abilityId: 'auin',
        defaultHotkey: 'N',
      },
    ],
  },
  {
    img: 'undead_lich.gif',
    title: 'Lich',
    spells: [
      {
        title: 'Frost Nova',
        img: 'undead_lich_frost_nova.gif',
        abilityId: 'aufn',
        defaultHotkey: 'N',
      },
      {
        title: 'Frost Armor',
        img: 'undead_lich_frost_armor.gif',
        abilityId: 'aufu',
        defaultHotkey: 'F',
      },
      {
        title: 'Dark Ritual',
        img: 'undead_lich_dark_ritual',
        abilityId: 'audr',
        defaultHotkey: 'R',
      },

      {
        title: 'Death And Decay',
        img: 'undead_lich_death_and_decay.gif',
        abilityId: 'audd',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'undead_crypt_lord.gif',
    title: 'Crypt Lord',
    spells: [
      {
        title: 'Impale',
        img: 'undead_crypt_lord_impale.gif',
        abilityId: 'auim',
        defaultHotkey: 'E',
      },
      {
        title: 'Spiked Carapace',
        img: 'undead_crypt_lord_spiked_carapace.gif',
        abilityId: 'auts',
        defaultHotkey: 'S',
      },
      {
        title: 'Carrion Beetles',
        img: 'undead_crypt_lord_carrion_beetles.gif',
        abilityId: 'aucb',
        defaultHotkey: 'C',
      },
      {
        title: 'Locust Swarm',
        img: 'undead_crypt_lord_locust_swarm.gif',
        abilityId: 'auls',
        defaultHotkey: 'L',
      },
    ],
  },
  {
    img: 'undead_acolyte.gif',
    title: 'Acolyte',
    spells: [
      {
        title: 'Restore',
        img: 'undead_acolyte_restore.gif',
        abilityId: 'arst',
        defaultHotkey: 'R',
      },
      {
        title: 'Gather',
        img: 'undead_acolyte_gather.gif.gif',
        abilityId: 'aaha',
        defaultHotkey: 'G',
      },
      {
        title: 'Sacrifice',
        img: 'undead_acolyte_sacrifice.gif',
        abilityId: 'alam',
        defaultHotkey: 'C',
      },
    ],
  },
  {
    img: 'undead_ghoul.gif',
    title: 'Ghoul',
    spells: [cannibalize],
  },
  {
    img: 'undead_crypt_fiend.gif',
    title: 'Crypt Fiend',
    spells: [
      {
        title: 'Web',
        img: 'undead_crypt_fiend_web.gif',
        abilityId: 'aweb',
        defaultHotkey: 'W',
      },
      burrow,
    ],
  },
  {
    img: 'undead_gargoyle.gif',
    title: 'Gargoyle',
    spells: [
      {
        title: 'Stone Form',
        img: 'undead_gargoyle_storm_form.gif',
        abilityId: 'astn',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'undead_abomination.gif',
    title: 'Abomination',
    spells: [cannibalize],
  },
  {
    img: 'undead_meat_wagon.gif',
    title: 'Meat Wagon',
    spells: [
      {
        title: 'Get Corpse',
        img: 'undead_meat_wagon_get_corpse.gif',
        abilityId: 'amel',
        defaultHotkey: 'C',
      },
      {
        title: 'Drop All Corpses',
        img: 'undead_meat_wagon_drop_all_corpses.gif',
        abilityId: 'amed',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'undead_necromancer.gif',
    title: 'Necromancer',
    spells: [
      {
        title: 'Raise Dead',
        img: 'undead_necromancer_raise_dead.gif',
        abilityId: 'arai',
        defaultHotkey: 'R',
      },
      {
        title: 'Unholy Frenzy',
        img: 'undead_necromancer_unholy_frenzy.gif',
        abilityId: 'auhf',
        defaultHotkey: 'U',
      },
      {
        title: 'Cripple',
        img: 'undead_necromancer_cripple.gif',
        abilityId: 'acri',
        defaultHotkey: 'C',
      },
    ],
  },
  {
    img: 'undead_banshee.gif',
    title: 'Banshee',
    spells: [
      {
        title: 'Curse',
        img: 'undead_banshee_curse.gif',
        abilityId: 'acrs',
        defaultHotkey: 'C',
      },
      {
        title: 'Anti-Magic Shell',
        img: 'undead_banshee_anti_magic_shell.gif',
        abilityId: 'aam2',
        defaultHotkey: 'N',
      },
      {
        title: 'Possession',
        img: 'undead_banshee_possession.gif',
        abilityId: 'aps2',
        defaultHotkey: 'C',
      },
    ],
  },
  {
    img: 'undead_carrion_beetle.gif',
    title: 'Carrion Beetle',
    spells: [burrow],
  },
  {
    img: 'undead_obsidian_statue.gif',
    title: 'Obsidian Statue',
    spells: [
      {
        title: 'Essence of Blight',
        img: 'undead_obsidian_statue_essence_of_blight.gif',
        abilityId: 'arpl',
        defaultHotkey: 'B',
      },
      {
        title: 'Spirit Touch',
        img: 'undead_obsidian_statue_spirit_touch.gif',
        abilityId: 'arpm',
        defaultHotkey: 'C',
      },
      {
        title: 'Morph Into Destroyer',
        img: 'undead_obsidian_statue_morph_into_destroyer.gif',
        abilityId: 'ubsp',
        defaultHotkey: 'T',
      },
    ],
  },
  {
    img: 'undead_destroyer.gif',
    title: 'Destroyer',
    spells: [
      {
        title: 'Absorb Mana',
        img: 'undead_destroyer_absorb_mana.gif',
        abilityId: 'aabs',
        defaultHotkey: 'B',
      },
      {
        title: 'Devour Magic',
        img: 'undead_destroyer_devour_magic.gif',
        abilityId: 'advm',
        defaultHotkey: 'D',
      },
      {
        title: 'Orb Of Annihilation',
        img: 'undead_destroyer_orb_of_annihilation.gif',
        abilityId: 'afak',
        defaultHotkey: 'O',
      },
    ],
  },
];

export default undeadUnits;
