import WarcraftAbility from "./WarcraftAbility";
export default interface WarcraftUnitTile {
    readonly img: string;
    readonly title: string;
    readonly spells: WarcraftAbility[];
}
