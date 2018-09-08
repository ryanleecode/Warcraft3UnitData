import humanUnits from './humanUnits';
import miscellaneous from './miscellaneous';
import neutralUnits from './neutralUnits';
import nightElfUnits from './nightElfUnits';
import orcUnits from './orcUnits';
import undeadUnits from './undeadUnits';
import WarcraftAbility from './WarcraftAbility';
import WarcraftUnit from './WarcraftUnit';
import WarcraftUnitsDataMapper from './WarcraftUnitsDataMapper';

const dataMapper = new WarcraftUnitsDataMapper();
const mappedHumanUnits = dataMapper.map(humanUnits);
const mappedUndeadUnits = dataMapper.map(undeadUnits);
const mappedOrcUnits = dataMapper.map(orcUnits);
const mappedNightElfUnits = dataMapper.map(nightElfUnits);
const mappedMiscellaneous = dataMapper.map(miscellaneous);
const mappedNeutralUnits = dataMapper.map(neutralUnits);

export {
  WarcraftAbility,
  WarcraftUnit,
  mappedHumanUnits as humanUnits,
  mappedUndeadUnits as undeadUnits,
  mappedOrcUnits as orcUnits,
  mappedNightElfUnits as nightElfUnits,
  mappedMiscellaneous as miscellaneous,
  mappedNeutralUnits as neutralUnits,
};
