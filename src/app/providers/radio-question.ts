import {QuestionBase} from './question-base';

export class RadioQuestion extends QuestionBase<string> {
  controlType = 'radio';
  type: string;
  src: string[];
  constructor(options: {} = {}) {
    super(options);
    console.log(options);
    this.src = options['src'] || '';
    this.type = 'radio';
    console.log(this.src);
  }
}
