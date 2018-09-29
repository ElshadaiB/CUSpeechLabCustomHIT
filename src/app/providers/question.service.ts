import { Injectable } from '@angular/core';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './textbox-question';
import {AudioQuestion} from './audio-question';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RadioQuestion} from './radio-question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  constructor (private httpClient: HttpClient) {}
  getQuestions(transcriptions: string[]) {
    console.log('in questions service creating questions');
    console.log('transcriptions lenght ' + transcriptions.length);
      let questions: QuestionBase<any>[] = new Array();
      console.log('questions lenght ' + questions.length);
      for (let i = 0; i < transcriptions.length; i++) {
        questions.push(new TextboxQuestion({
          key: transcriptions[i],
          label: 'Please write the transcription here:',
          value: '',
          required: true,
          src: transcriptions[i]
        }));
      }
      console.log('length is ' + questions.length);
      console.log(questions);
      return questions;
  }
  getRadioQuestions(audioUrls: string[][]) {
    console.log('in questions service creating questions');
    console.log('transcriptions lenght ' + audioUrls.length);
    let questions: QuestionBase<any>[] = new Array();
    console.log('questions lenght ' + questions.length);
    for (let i = 0; i < audioUrls.length; i++) {
      questions.push(new RadioQuestion({
        key: i.toString(),
        label: 'Please select a voice:',
        value: '',
        required: true,
        src: audioUrls[i]
      }));
    }
    console.log('length is ' + questions.length);
    console.log(questions);
    return questions;
  }
}
