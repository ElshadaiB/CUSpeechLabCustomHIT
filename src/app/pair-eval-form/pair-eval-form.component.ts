import {Component, Input, OnInit} from '@angular/core';
import {QuestionService} from '../providers/question.service';
import {PairEval} from '../providers/pair-eval';

@Component({
  selector: 'app-pair-eval-form',
  templateUrl: './pair-eval-form.component.html',
  styleUrls: ['./pair-eval-form.component.css']
})
export class PairEvalFormComponent implements OnInit {
  questions: any[];
  @Input() pairs: string[][];
  @Input() model: PairEval;
  constructor(private qs: QuestionService) {
  }
  ngOnInit() {
    console.log('in tester printing transcriptions');
    console.log(this.pairs);
    this.questions = this.qs.getRadioQuestions(this.pairs);
  }

}
