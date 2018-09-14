import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pairwisepage',
  templateUrl: './pairwisepage.component.html',
  styleUrls: ['./pairwisepage.component.css']
})
export class PairwisepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.addAudios('http://localhost/WebAudioEvaluationTool-master/media/example/0.wav',
      'http://cheshire.cs.columbia.edu/amt/71/sus_001.wav');
    this.addAudios('http://localhost/WebAudioEvaluationTool-master/media/example/0.wav',
      'http://cheshire.cs.columbia.edu/amt/71/sus_001.wav');
  }

  addAudios(url1: string, url2: string): void {
    const body = document.getElementsByTagName('app-pairwisepage')[0];
    const div = document.createElement('div');
    div.setAttribute('class', 'pairwise-container');
    /*
     * Add Audio 1
     */
    const div1 = document.createElement('div');
    div1.setAttribute('class', 'audio1');
    const label1 = document.createElement('p');
    label1.setAttribute('align', 'center');
    const labeltext1 = document.createTextNode('Voice A');
    label1.appendChild(labeltext1);
    div1.appendChild(label1);
    const audio1 = document.createElement('audio');
    audio1.setAttribute('controls', 'false');
    audio1.setAttribute('controlsList', 'nodownload');
    audio1.setAttribute('align', 'left');
    audio1.setAttribute('src', url1);
    audio1.setAttribute('type', 'audio/wav');
    div1.appendChild(audio1)
    div.appendChild(div1);
    /*
     * Add Audio 2
     */
    const div2 = document.createElement('div');
    div2.setAttribute('class', 'audio2');
    const label2 = document.createElement('p');
    label2.setAttribute('align', 'center');
    const labeltext2 = document.createTextNode('Voice B');
    label2.appendChild(labeltext2);
    div2.appendChild(label2);
    const audio2 = document.createElement('audio');
    audio2.setAttribute('controls', 'false');
    audio2.setAttribute('controlsList', 'nodownload');
    audio2.setAttribute('align', 'right');
    audio2.setAttribute('src', url2);
    audio2.setAttribute('type', 'audio/wav');
    div2.appendChild(audio2);
    div.appendChild(div2);
    /*
     * Radio Buttons
     */
    const div_selector = document.createElement('div');
    div_selector.setAttribute('class', 'selector');
    const title = document.createElement('p');
    title.appendChild(document.createTextNode('Please select a voice: '));
    div_selector.appendChild(title);
    const form = document.createElement('form');
    /*
     * Button A
     */
    const divA = document.createElement('div');
    divA.setAttribute('class', 'radio');
    const labelA = document.createElement('label');
    labelA.setAttribute('for', 'VoiceA');
    labelA.appendChild(document.createTextNode('Voice A'));
    const radioA = document.createElement('input');
    radioA.setAttribute('type', 'radio');
    radioA.setAttribute('name', 'Voice');
    radioA.setAttribute('value', 'A');
    radioA.setAttribute('id', 'VoiceA');
    radioA.appendChild(document.createTextNode('Voice A'));
    divA.appendChild(radioA);
    divA.appendChild(labelA);
    /*
     * Button B
     */
    const divB = document.createElement('div');
    divB.setAttribute('class', 'radio');
    const labelB = document.createElement('label');
    labelB.setAttribute('for', 'VoiceB');
    labelB.appendChild(document.createTextNode('Voice B'));
    const radioB = document.createElement('input');
    radioB.setAttribute('type', 'radio');
    radioB.setAttribute('name', 'Voice');
    radioB.setAttribute('value', 'B');
    radioB.setAttribute('id', 'VoiceB');
    radioB.appendChild(document.createTextNode('Voice B'));
    divB.appendChild(radioB);
    divB.appendChild(labelB);
    /*
     * Append Children
     */
    form.appendChild(divA);
    form.appendChild(document.createElement('br'));
    form.appendChild(divB);
    div_selector.appendChild(form);
    body.appendChild(div);
    body.appendChild(document.createElement('br'));
    body.appendChild(div_selector);
  }
}
