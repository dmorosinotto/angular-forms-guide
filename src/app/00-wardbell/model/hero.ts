export interface Hero {
  id: number;
  name: string;

  /** Hero's secret identity */
  alterEgo?: string;

  /** Hero's distinctive super power */
  power: string | null;

  /** How strong is the hero's power */
  powerQualifier?: string | null;
}
