import {Component, Input, OnInit} from '@angular/core';
import { QuestionService } from '../providers/question.service';
import {HttpClient} from '@angular/common/http';
import {IntellEval} from '../providers/intell-eval';

@Component({
  selector: 'app-tester',
  templateUrl: './intell-eval-form.component.html',
  styleUrls: ['./intell-eval-form.component.css'],
  providers: [QuestionService]
})
export class IntellEvalFormComponent implements OnInit {
  questions: any[];
  @Input() transcriptions: string[];
  @Input() model: IntellEval;
  constructor(private qs: QuestionService, private httpClient: HttpClient) {
  }
  ngOnInit() {
    console.log('in tester printing transcriptions');
    console.log(this.transcriptions);
    this.questions = this.qs.getQuestions(this.transcriptions);
  }

}
