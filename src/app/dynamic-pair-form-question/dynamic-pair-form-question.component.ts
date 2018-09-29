import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase} from '../providers/question-base';


@Component({
  selector: 'app-dynamic-pair-form-question',
  templateUrl: './dynamic-pair-form-question.component.html',
  styleUrls: ['./dynamic-pair-form-question.component.css']
})
export class DynamicPairFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor () {
    console.log('in dynamic form');
    console.log (this.question);
  }
  get isValid() { return this.form.controls[this.question.key].valid; }
}
