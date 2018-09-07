import WarcraftUnit from './WarcraftUnit';

const orcUnits: WarcraftUnit[] = [
  {
    img: 'orc_blademaster.gif',
    title: 'Blademaster',
    spells: [
      {
        title: 'Wind Walk',
        img: 'orc_blademaster_wind_walk.gif',
        abilityId: 'aowk',
        defaultHotkey: 'W',
      },
      {
        title: 'Mirror Image',
        img: 'orc_blademaster_mirror_image.gif',
        abilityId: 'aomi',
        defaultHotkey: 'M',
      },
      {
        title: 'Critical Strike',
        img: 'orc_blademaster_critical_strike.gif',
        abilityId: 'aocr',
        defaultHotkey: 'C',
      },
      {
        title: 'Bladestorm',
        img: 'orc_blademaster_bladestorm.gif',
        abilityId: 'aoww',
        defaultHotkey: 'B',
      },
    ],
  },
  {
    img: 'orc_far_seer.gif',
    title: 'Far Seer',
    spells: [
      {
        title: 'Chain Lightning',
        img: 'orc_far_seer_chain_lightning.gif',
        abilityId: 'aocl',
        defaultHotkey: 'C',
      },
      {
        title: 'Far Sight',
        img: 'orc_far_seer_far_sight.gif',
        abilityId: 'aofs',
        defaultHotkey: 'F',
      },
      {
        title: 'Feral Spirit',
        img: 'orc_far_seer_feral_spirit.gif',
        abilityId: 'aosf',
        defaultHotkey: 'T',
      },
      {
        title: 'Earthquake',
        img: 'orc_far_seer_earthquake.gif',
        abilityId: 'aoeq',
        defaultHotkey: 'E',
      },
    ],
  },
  {
    img: 'orc_tauren_chieftain.gif',
    title: 'Tauren Chieftain',
    spells: [
      {
        title: 'Shockwave',
        img: 'orc_tauren_chieftain_shockwave.gif',
        abilityId: 'aosh',
        defaultHotkey: 'W',
      },
      {
        title: 'War Stomp',
        img: 'orc_far_seer_war_stomp.gif',
        abilityId: 'aows',
        defaultHotkey: 'T',
      },
      {
        title: 'Endurance Aura',
        img: 'orc_tauren_chieftain_endurance_aura.gif',
        abilityId: 'aoae',
        defaultHotkey: 'E',
      },
      {
        title: 'Reincarnation',
        img: 'orc_tauren_chieftain_reincarnation.gif',
        abilityId: 'aore',
        defaultHotkey: 'R',
      },
    ],
  },
  {
    img: 'orc_shadow_hunter.gif',
    title: 'Shadow Hunter',
    spells: [
      {
        title: 'Healing Wave',
        img: 'orc_shadow_hunter_healing_wave.gif',
        abilityId: 'aohw',
        defaultHotkey: 'E',
      },
      {
        title: 'Hex',
        img: 'orc_shadow_hunter_hex.gif',
        abilityId: 'aohx',
        defaultHotkey: 'X',
      },
      {
        title: 'Serpent Ward',
        img: 'orc_shadow_hunter_serpent_ward.gif',
        abilityId: 'aosw',
        defaultHotkey: 'W',
      },
      {
        title: 'Big Bad Voodoo',
        img: 'orc_shadow_hunter_big_bad_voodoo.gif',
        abilityId: 'aovd',
        defaultHotkey: 'V',
      },
    ],
  },
  {
    img: 'orc_peon.gif',
    title: 'Peon',
    spells: [
      {
        title: 'Repair',
        img: 'orc_peon_repair.gif',
        abilityId: 'arep',
        defaultHotkey: 'R',
      },
      {
        title: 'Gather',
        img: 'orc_peon_gather.gif',
        abilityId: 'aaha',
        defaultHotkey: 'G',
      },
    ],
  },
  {
    img: 'orc_troll_berserker.gif',
    title: 'Troll Berserker',
    spells: [
      {
        title: 'Berserk',
        img: 'orc_troll_berserker_berserk.gif',
        abilityId: 'absk',
        defaultHotkey: 'B',
      },
    ],
  },
  {
    img: 'orc_shaman.gif',
    title: 'Shaman',
    spells: [
      {
        title: 'Purge',
        img: 'orc_shaman_purge.gif',
        abilityId: 'apg2',
        defaultHotkey: 'G',
      },
      {
        title: 'Lightning Shield',
        img: 'orc_shaman_lightning_shield.gif',
        abilityId: 'alsh',
        defaultHotkey: 'L',
      },
      {
        title: 'Bloodlust',
        img: 'orc_shaman_bloodlust.gif',
        abilityId: 'ablo',
        defaultHotkey: 'B',
      },
    ],
  },
  {
    img: 'orc_witch_doctor.gif',
    title: 'Witch Doctor',
    spells: [
      {
        title: 'Sentry Ward',
        img: 'orc_witch_doctor_sentry_ward.gif',
        abilityId: 'aeye',
        defaultHotkey: 'W',
      },
      {
        title: 'Stasis Trap',
        img: 'orc_witch_doctor_stasis_trap.gif',
        abilityId: 'asta',
        defaultHotkey: 'T',
      },
      {
        title: 'Healing Ward',
        img: 'orc_witch_doctor_healing_ward.gif',
        abilityId: 'ahwd',
        defaultHotkey: 'E',
      },
    ],
  },
  {
    img: 'orc_spirit_walker.gif',
    title: 'Spirit Walker',
    spells: [
      {
        title: 'Spirit Link',
        img: 'orc_spirit_walker_spirit_link.gif',
        abilityId: 'aspl',
        defaultHotkey: 'R',
      },
      {
        title: 'Disenchant',
        img: 'orc_spirit_walker_disenchant.gif',
        abilityId: 'adcn',
        defaultHotkey: 'D',
      },
      {
        title: 'Ancestral Spirit',
        img: 'orc_spirit_walker_ancestral_spirit.gif',
        abilityId: 'aast',
        defaultHotkey: 'C',
      },
      {
        title: 'Ethereal Form',
        img: 'orc_spirit_walker_ethereal_form.gif',
        abilityId: 'acpf',
        defaultHotkey: 'F',
      },
    ],
  },
  {
    img: 'orc_raider.gif',
    title: 'Raider',
    spells: [
      {
        title: 'Ensnare',
        img: 'orc_raider_ensnare.gif',
        abilityId: 'aens',
        defaultHotkey: 'E',
      },
    ],
  },
  {
    img: 'orc_kodo_beast.gif',
    title: 'Raider',
    spells: [
      {
        title: 'Devour',
        img: 'orc_kodo_devour.gif',
        abilityId: 'adev',
        defaultHotkey: 'D',
      },
    ],
  },
  {
    img: 'orc_troll_batrider.gif',
    title: 'Batrider',
    spells: [
      {
        title: 'Unstable Concoction',
        img: 'orc_troll_batrider_unstable_concoction.gif',
        abilityId: 'auco',
        defaultHotkey: 'C',
      },
    ],
  },
];

export default orcUnits;
