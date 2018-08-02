import humanUnits from './humanUnits';
import WarcraftAbility from './WarcraftAbility';
import WarcraftUnit from './WarcraftUnit';
import WarcraftUnitsDataMapper from './WarcraftUnitsDataMapper';

const dataMapper = new WarcraftUnitsDataMapper();
const mappedHumanUnits = dataMapper.map(humanUnits);

export { WarcraftAbility, WarcraftUnit, mappedHumanUnits as humanUnits };
