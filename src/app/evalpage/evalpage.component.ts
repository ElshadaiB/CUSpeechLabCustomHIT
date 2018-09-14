import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evalpage',
  templateUrl: './evalpage.component.html',
  styleUrls: ['./evalpage.component.css']
})
export class EvalpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  this.addAudio('http://localhost/WebAudioEvaluationTool-master/media/example/0.wav');
  this.addAudio('http://cheshire.cs.columbia.edu/amt/71/sus_001.wav');
  }
  addAudio(url: string): void {
    const body = document.getElementsByTagName('body')[0];
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
    body.appendChild(textbox);
  }

}



