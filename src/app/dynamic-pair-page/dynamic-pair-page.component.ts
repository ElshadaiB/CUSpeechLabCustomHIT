import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../providers/question-base';
import { QuestionControlService } from '../providers/question-control-service.service';
import {UploadDataService} from '../providers/upload-data.service';
import {AfService} from '../providers/af.service';
import {PairEval} from '../providers/pair-eval';
import {PairComparison} from '../providers/pair-comparison';
import {Transcription} from '../providers/transcription';

@Component({
  selector: 'app-dynamic-pair-page',
  templateUrl: './dynamic-pair-page.component.html',
  styleUrls: ['./dynamic-pair-page.component.css'],
  providers: [QuestionControlService]
})
export class DynamicPairPageComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  @Input() model: PairEval;
  form: FormGroup;
  payLoad = '';
  comparisons: PairComparison[] = new Array();
  constructor(private qcs: QuestionControlService, private ups: UploadDataService, private afs: AfService) {
  }
  ngOnInit() {
    console.log('printing questions');
    console.log(this.questions);
    this.form = this.qcs.toFormGroup(this.questions);
    console.log('Printing form group');
    console.log(this.form.value);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    const results = this.form.value;
   /* Object.keys(results).forEach(key => {
      console.log(key);
      console.log(results[key]);
      const t = new Transcription(key, results[key]);
      console.log(t);
      this.transcriptions.push(t);
    });
    */
    //console.log(JSON.stringify(this.transcriptions));
    //this.model.transcriptions = this.transcriptions;
    //console.log(this.model);
    //this.ups.addEval(this.model);
  }
}
