import {QuestionBase} from './question-base';

export class AudioQuestion extends QuestionBase<string> {
    controlType = 'audio';
    type: string;
    controls: boolean;
    controlsList: string;
    src: string;
    constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
    this.controls = options['controls'] || '';
    this.controlsList = options['controlsList'] || '';
    this.src = options['src'] || '';
  }
  }

