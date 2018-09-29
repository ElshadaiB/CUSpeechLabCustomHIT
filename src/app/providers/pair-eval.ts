import {PairComparison} from './pair-comparison';

export class PairEval {
  constructor(
    public HIT_ID: string,
    public title: string,
    public workerID: string,
    public workerEmail: string,
    public pairEvals: PairComparison[]
  ) {}
}
