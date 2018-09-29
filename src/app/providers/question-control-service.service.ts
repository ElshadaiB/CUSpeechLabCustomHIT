import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }
  toFormGroup(questions: QuestionBase<any>[] ) {
    let group: any = {};

    questions.forEach(question => {
      console.log(question);
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    console.log('printing group in control service');
    console.log(group);
    return new FormGroup(group);
  }
}
