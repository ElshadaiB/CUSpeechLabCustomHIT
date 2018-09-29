import {Transcription} from './transcription';

export class IntellEval {
  constructor(
    public batchID: string,
    public HIT_ID: string,
    public title: string,
    public workerID: string,
    public workerEmail: string,
    public transcriptions: Transcription[]
  ) {}
}

