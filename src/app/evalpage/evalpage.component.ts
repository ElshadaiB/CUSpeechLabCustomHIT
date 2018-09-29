import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IntellEval } from '../providers/intell-eval';
import { Transcription } from '../providers/transcription';
import { AfService } from '../providers/af.service';


@Component({
  selector: 'app-evalpage',
  templateUrl: './evalpage.component.html',
  styleUrls: ['./evalpage.component.css']
})
export class EvalpageComponent implements OnInit {
  model: IntellEval;
  private batchURL: string;
  stranscriptions: string[];
  car: string;
  transcriptions: Transcription[];
  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient, private af: AfService) {
    this.batchURL = this.route.snapshot.queryParams['batch'];
    this.model = new IntellEval('', '', 'Amharic Intelligibility Evaluations', this.af.getUserId(), this.af.getUserEmail(), []);
    console.log(this.batchURL);
    let stranscriptions = new Array();
    this.httpClient.get('assets/' + this.batchURL).subscribe(result => {
      this.model.HIT_ID = result['taskID'];
      this.model.batchID = result['batchID'];
      const count = result['count'];
      for (let i = 0; i < count; i++) {
        let audioURL = result['links'][i];
        console.log(audioURL);
        stranscriptions.push(audioURL);
      }
      this.stranscriptions = stranscriptions;
      console.log(this.stranscriptions);
      console.log(result['links']);
      console.log(JSON.stringify(this.model));
    });
  }

  ngOnInit() {
    if (this.stranscriptions !== undefined) {
      console.log('true');
      console.log(this.stranscriptions);
    }

  // this.addAudio('http://localhost/WebAudioEvaluationTool-master/media/example/0.wav');
  // this.addAudio('http://cheshire.cs.columbia.edu/amt/71/sus_001.wav');
  }
  addAudio(url: string): void {
    const body = document.getElementsByTagName('form')[0];
    // Add Audio
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'false');
    audio.setAttribute('controlsList', 'nodownload');
    audio.setAttribute('src', url);
    audio.setAttribute('type', 'audio/wav');
    body.appendChild(audio);
    body.appendChild(document.createElement('br'));
    // Add TextArea Label
    const label = document.createElement('label');
    const labeltext = document.createTextNode('Please write the transcription here:');
    label.appendChild(labeltext);
    body.appendChild(label);
    // Addd TextBox
    const textbox = document.createElement('textarea');
    textbox.setAttribute('cols', '250');
    textbox.setAttribute('rows', '6');
    textbox.setAttribute('required', '');
    body.appendChild(textbox);
  }
}



