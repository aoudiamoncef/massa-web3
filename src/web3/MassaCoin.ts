import { toMAS, fromMAS } from '../utils/converters';
import BigNumber from 'bignumber.js';
import { MassaUnit } from './MassaUnit';

export class MassaCoin extends MassaUnit {
  constructor(value: BigNumber | number | string) {
    super(value);
  }

  public static fromValue(value: number | string): MassaCoin {
    return new MassaCoin(fromMAS(value));
  }
}
