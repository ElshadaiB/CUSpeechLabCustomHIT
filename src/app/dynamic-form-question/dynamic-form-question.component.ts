import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase} from '../providers/question-base';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor () {
    console.log('in dynamic form');
    console.log (this.question);
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
}
