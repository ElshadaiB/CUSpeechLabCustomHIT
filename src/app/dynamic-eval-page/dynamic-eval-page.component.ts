import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../providers/question-base';
import { QuestionControlService } from '../providers/question-control-service.service';
import {UploadDataService} from '../providers/upload-data.service';
import {AfService} from '../providers/af.service';
import {Transcription} from '../providers/transcription';
import {IntellEval} from '../providers/intell-eval';
import {Router} from '@angular/router';
import {TextboxQuestion} from '../providers/textbox-question';

@Component({
  selector: 'app-dynamic-eval-page',
  templateUrl: './dynamic-eval-page.component.html',
  styleUrls: ['./dynamic-eval-page.component.css'],
  providers: [QuestionControlService]
})
export class DynamicEvalPageComponent implements OnInit {
  @Input() questions: QuestionBase<TextboxQuestion>[] = [];
  @Input() model: IntellEval;
  form: FormGroup;
  payLoad = '';
  audioCount = {};
  transcriptions: Transcription[] = new Array();
  audDOMs: NodeListOf<HTMLAudioElement>;
  constructor(private qcs: QuestionControlService, private ups: UploadDataService, private afs: AfService, private router: Router) {}
  ngOnInit() {
    console.log('in dynamic eval page');
    console.log(this.questions);
    //
    this.form = this.qcs.toFormGroup(this.questions);
    console.log('Printing form group');
    console.log(this.form.value);
    //
    this.questions.forEach(value => {
      this.audioCount[value.src] = 0;
    });
    //
    console.log(this.audioCount);
    for (const key in this.audioCount) {}
    //
    console.log('Printing DOM elements');
    console.log(this.audDOMs);
    //
    this.onChanges();
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    const results = this.form.value;
    Object.keys(results).forEach(key => {
      console.log(key);
      console.log(results[key]);
      const t = new Transcription(key, results[key]);
      console.log(t);
      this.transcriptions.push(t);
    });
    console.log(JSON.stringify(this.transcriptions));
    this.model.transcriptions = this.transcriptions;
    console.log(this.model);
    this.ups.addEval(this.model);
  }
 /* ngOnChanges() {
    this.onChanges();
  }
  */
  play(event) {
    const audioID = event.target.id;
    console.log(audioID);
    this.audioCount[audioID] += 1;
    console.log(this.audioCount[audioID]);
    const domEl = document.getElementById(audioID);
    console.log(domEl);
    if (this.audioCount[audioID] === 3) {
      domEl.setAttribute('src', '');
    }
  }
  onChanges() {
    if (this.form !== undefined) {
      this.form.valueChanges.forEach(value => {
        console.log(value);
        Object.keys(value).forEach(key => {
          console.log(key);
          console.log(this.form.controls[key]);
          let j = this.form.controls[key].value;
          console.log(j);
          this.form.controls[key].setValue(this.transcrire(j), {'onlySelf': true});
        });
      });
    }
  }
  //  copyright lexilogos.com
  transcrire(tvalue: string): string {
    tvalue = tvalue.replace(/[äâ]/g, "e");
    tvalue = tvalue.replace(/[êëē]/g, "é");

    tvalue = tvalue.replace(/w/g, "ው");
    tvalue = tvalue.replace(/ውe/g, "ወ");
    tvalue = tvalue.replace(/ውu/g, "ዉ");
    tvalue = tvalue.replace(/ውi/g, "ዊ");
    tvalue = tvalue.replace(/ውa/g, "ዋ");
    tvalue = tvalue.replace(/ውe/g, "ዌ");
    tvalue = tvalue.replace(/ውé/g, "ዌ");
    tvalue = tvalue.replace(/ውo/g, "ዎ");

    tvalue = tvalue.replace(/h/g, "ህ");
    tvalue = tvalue.replace(/ህe/g, "ሀ");
    tvalue = tvalue.replace(/ህu/g, "ሁ");
    tvalue = tvalue.replace(/ህi/g, "ሂ");
    tvalue = tvalue.replace(/ህa/g, "ሃ");
    tvalue = tvalue.replace(/ሀe/g, "ሄ");
    tvalue = tvalue.replace(/ህé/g, "ሄ");
    tvalue = tvalue.replace(/ህo/g, "ሆ");
    tvalue = tvalue.replace(/ሃa/g, "ዏ");

// moodif hh par x
    tvalue = tvalue.replace(/[ẖxX]/g, "ኅ");
    tvalue = tvalue.replace(/ኅe/g, "ኀ");
    tvalue = tvalue.replace(/ኅu/g, "ኁ");
    tvalue = tvalue.replace(/ኅi/g, "ኂ");
    tvalue = tvalue.replace(/ኅa/g, "ኃ");
    tvalue = tvalue.replace(/ኀe/g, "ኄ");
    tvalue = tvalue.replace(/ኅé/g, "ኄ");
    tvalue = tvalue.replace(/ኅo/g, "ኆ");
    tvalue = tvalue.replace(/ኃa/g, "ኋ");

    tvalue = tvalue.replace(/[lL]/g, "ል");
    tvalue = tvalue.replace(/ልe/g, "ለ");
    tvalue = tvalue.replace(/ልu/g, "ሉ");
    tvalue = tvalue.replace(/ልi/g, "ሊ");
    tvalue = tvalue.replace(/ልa/g, "ላ");
    tvalue = tvalue.replace(/ለe/g, "ሌ");
    tvalue = tvalue.replace(/ልé/g, "ሌ");
    tvalue = tvalue.replace(/ልo/g, "ሎ");
    tvalue = tvalue.replace(/ላa/g, "ሏ");

    tvalue = tvalue.replace(/ህህ/g, "ሕ");
    tvalue = tvalue.replace(/[ḥH]/g, "ሕ");
    tvalue = tvalue.replace(/ሕe/g, "ሐ");
    tvalue = tvalue.replace(/ሕu/g, "ሑ");
    tvalue = tvalue.replace(/ሕi/g, "ሒ");
    tvalue = tvalue.replace(/ሕa/g, "ሓ");
    tvalue = tvalue.replace(/ሐe/g, "ሔ");
    tvalue = tvalue.replace(/ሕé/g, "ሔ");
    tvalue = tvalue.replace(/ሕo/g, "ሖ");
    tvalue = tvalue.replace(/ሓa/g, "ሗ");

    tvalue = tvalue.replace(/[mM]/g, "ም");
    tvalue = tvalue.replace(/ምe/g, "መ");
    tvalue = tvalue.replace(/ምu/g, "ሙ");
    tvalue = tvalue.replace(/ምi/g, "ሚ");
    tvalue = tvalue.replace(/ምa/g, "ማ");
    tvalue = tvalue.replace(/መe/g, "ሜ");
    tvalue = tvalue.replace(/ምé/g, "ሜ");
    tvalue = tvalue.replace(/ምo/g, "ሞ");
    tvalue = tvalue.replace(/ማa/g, "ሟ");
    tvalue = tvalue.replace(/ምY/g, "ፙ");
    tvalue = tvalue.replace(/ፙa/g, "ፙ");

    tvalue = tvalue.replace(/[rR]/g, "ር");
    tvalue = tvalue.replace(/ርe/g, "ረ");
    tvalue = tvalue.replace(/ርu/g, "ሩ");
    tvalue = tvalue.replace(/ርi/g, "ሪ");
    tvalue = tvalue.replace(/ርa/g, "ራ");
    tvalue = tvalue.replace(/ረe/g, "ሬ");
    tvalue = tvalue.replace(/ርé/g, "ሬ");
    tvalue = tvalue.replace(/ርo/g, "ሮ");
    tvalue = tvalue.replace(/ራa/g, "ሯ");
    tvalue = tvalue.replace(/ርY/g, "ፘ");
    tvalue = tvalue.replace(/ፘa/g, "ፘ");

    tvalue = tvalue.replace(/s/g, "ስ");
    tvalue = tvalue.replace(/ስe/g, "ሰ");
    tvalue = tvalue.replace(/ስu/g, "ሱ");
    tvalue = tvalue.replace(/ስi/g, "ሲ");
    tvalue = tvalue.replace(/ስa/g, "ሳ");
    tvalue = tvalue.replace(/ሰe/g, "ሴ");
    tvalue = tvalue.replace(/ስé/g, "ሴ");
    tvalue = tvalue.replace(/ስo/g, "ሶ");
    tvalue = tvalue.replace(/ሳa/g, "ሷ");

    tvalue = tvalue.replace(/z/g, "ዝ");
    tvalue = tvalue.replace(/ዝe/g, "ዘ");
    tvalue = tvalue.replace(/ዝu/g, "ዙ");
    tvalue = tvalue.replace(/ዝi/g, "ዚ");
    tvalue = tvalue.replace(/ዝa/g, "ዛ");
    tvalue = tvalue.replace(/ዘe/g, "ዜ");
    tvalue = tvalue.replace(/ዝé/g, "ዜ");
    tvalue = tvalue.replace(/ዝo/g, "ዞ");
    tvalue = tvalue.replace(/ዛa/g, "ዟ");

// modif ss remplacé par sz
    tvalue = tvalue.replace(/ś/g, "ሥ");
    tvalue = tvalue.replace(/ስዝ/g, "ሥ");
    tvalue = tvalue.replace(/ሥe/g, "ሠ");
    tvalue = tvalue.replace(/ሥu/g, "ሡ");
    tvalue = tvalue.replace(/ሥi/g, "ሢ");
    tvalue = tvalue.replace(/ሥa/g, "ሣ");
    tvalue = tvalue.replace(/ሠe/g, "ሤ");
    tvalue = tvalue.replace(/ሥé/g, "ሤ");
    tvalue = tvalue.replace(/ሥo/g, "ሦ");
    tvalue = tvalue.replace(/ሣa/g, "ሧ");

    tvalue = tvalue.replace(/š/g, "ሽ");
    tvalue = tvalue.replace(/ስስ/g, "ሽ");
    tvalue = tvalue.replace(/ስህ/g, "ሽ");
    tvalue = tvalue.replace(/ሽe/g, "ሸ");
    tvalue = tvalue.replace(/ሽu/g, "ሹ");
    tvalue = tvalue.replace(/ሽi/g, "ሺ");
    tvalue = tvalue.replace(/ሽa/g, "ሻ");
    tvalue = tvalue.replace(/ሸe/g, "ሼ");
    tvalue = tvalue.replace(/ሽé/g, "ሼ");
    tvalue = tvalue.replace(/ሽo/g, "ሾ");
    tvalue = tvalue.replace(/ሻa/g, "ሿ");


    tvalue = tvalue.replace(/q/g, "ቅ");
    tvalue = tvalue.replace(/ቅe/g, "ቀ");
    tvalue = tvalue.replace(/ቅu/g, "ቁ");
    tvalue = tvalue.replace(/ቅi/g, "ቂ");
    tvalue = tvalue.replace(/ቅa/g, "ቃ");
    tvalue = tvalue.replace(/ቀe/g, "ቄ");
    tvalue = tvalue.replace(/ቅé/g, "ቄ");
    tvalue = tvalue.replace(/ቅo/g, "ቆ");
    tvalue = tvalue.replace(/ቃa/g, "ቋ");


    tvalue = tvalue.replace(/ቅው/g, "ቍ");
    tvalue = tvalue.replace(/ቍe/g, "ቈ");
    tvalue = tvalue.replace(/ቍi/g, "ቊ");
    tvalue = tvalue.replace(/ቍa/g, "ቋ");
    tvalue = tvalue.replace(/ቈe/g, "ቌ");
    tvalue = tvalue.replace(/ቍé/g, "ቌ");

//qh
    tvalue = tvalue.replace(/ቅህ/g, "ቕ");
    tvalue = tvalue.replace(/ቕe/g, "ቐ");
    tvalue = tvalue.replace(/ቕu/g, "ቑ");
    tvalue = tvalue.replace(/ቕi/g, "ቒ");
    tvalue = tvalue.replace(/ቕa/g, "ቓ");
    tvalue = tvalue.replace(/ቐe/g, "ቔ");
    tvalue = tvalue.replace(/ቕé/g, "ቔ");
    tvalue = tvalue.replace(/ቕo/g, "ቖ");


    tvalue = tvalue.replace(/ቕው/g, "ቝ");
    tvalue = tvalue.replace(/ቍe/g, "ቘ");
    tvalue = tvalue.replace(/ቍi/g, "ቚ");
    tvalue = tvalue.replace(/ቍa/g, "ቛ");
    tvalue = tvalue.replace(/ቘe/g, "ቜ");
    tvalue = tvalue.replace(/ቍé/g, "ቜ");
// xw
    tvalue = tvalue.replace(/ኅው/g, "ኍ");
    tvalue = tvalue.replace(/ኍe/g, "ቘ");
    tvalue = tvalue.replace(/ኍi/g, "ቚ");
    tvalue = tvalue.replace(/ኍa/g, "ቛ");
    tvalue = tvalue.replace(/ቘe/g, "ቜ");
    tvalue = tvalue.replace(/ኍé/g, "ቜ");


    tvalue = tvalue.replace(/[bB]/g, "ብ");
    tvalue = tvalue.replace(/ብe/g, "በ");
    tvalue = tvalue.replace(/ብu/g, "ቡ");
    tvalue = tvalue.replace(/ብi/g, "ቢ");
    tvalue = tvalue.replace(/ብa/g, "ባ");
    tvalue = tvalue.replace(/በe/g, "ቤ");
    tvalue = tvalue.replace(/ብé/g, "ቤ");
    tvalue = tvalue.replace(/ብo/g, "ቦ");
    tvalue = tvalue.replace(/ባa/g, "ቧ");

    tvalue = tvalue.replace(/[vV]/g, "ቭ");
    tvalue = tvalue.replace(/ቭe/g, "ቨ");
    tvalue = tvalue.replace(/ቭu/g, "ቩ");
    tvalue = tvalue.replace(/ቭi/g, "ቪ");
    tvalue = tvalue.replace(/ቭa/g, "ቫ");
    tvalue = tvalue.replace(/ቨe/g, "ቬ");
    tvalue = tvalue.replace(/ቭé/g, "ቬ");
    tvalue = tvalue.replace(/ቭo/g, "ቮ");
    tvalue = tvalue.replace(/ቫa/g, "ቯ");

    tvalue = tvalue.replace(/t/g, "ት");
    tvalue = tvalue.replace(/ትe/g, "ተ");
    tvalue = tvalue.replace(/ትu/g, "ቱ");
    tvalue = tvalue.replace(/ትi/g, "ቲ");
    tvalue = tvalue.replace(/ትa/g, "ታ");
    tvalue = tvalue.replace(/ተe/g, "ቴ");
    tvalue = tvalue.replace(/ትé/g, "ቴ");
    tvalue = tvalue.replace(/ትo/g, "ቶ");
    tvalue = tvalue.replace(/ታa/g, "ቷ");

    tvalue = tvalue.replace(/[cč]/g, "ች");
    tvalue = tvalue.replace(/ችe/g, "ቸ");
    tvalue = tvalue.replace(/ችu/g, "ቹ");
    tvalue = tvalue.replace(/ችi/g, "ቺ");
    tvalue = tvalue.replace(/ችa/g, "ቻ");
    tvalue = tvalue.replace(/ቸe/g, "ቼ");
    tvalue = tvalue.replace(/ችé/g, "ቼ");
    tvalue = tvalue.replace(/ችo/g, "ቾ");
    tvalue = tvalue.replace(/ቻa/g, "ቿ");

    tvalue = tvalue.replace(/n/g, "ን");
    tvalue = tvalue.replace(/ንe/g, "ነ");
    tvalue = tvalue.replace(/ንu/g, "ኑ");
    tvalue = tvalue.replace(/ንi/g, "ኒ");
    tvalue = tvalue.replace(/ንa/g, "ና");
    tvalue = tvalue.replace(/ነe/g, "ኔ");
    tvalue = tvalue.replace(/ንé/g, "ኔ");
    tvalue = tvalue.replace(/ንo/g, "ኖ");
    tvalue = tvalue.replace(/ናa/g, "ኗ");

    tvalue = tvalue.replace(/N/g, "ኝ");
    tvalue = tvalue.replace(/ñ/g, "ኝ");
    tvalue = tvalue.replace(/ንy/g, "ኝ");
    tvalue = tvalue.replace(/ኝe/g, "ኘ");
    tvalue = tvalue.replace(/ኝu/g, "ኙ");
    tvalue = tvalue.replace(/ኝi/g, "ኚ");
    tvalue = tvalue.replace(/ኝa/g, "ኛ");
    tvalue = tvalue.replace(/ኝe/g, "ኜ");
    tvalue = tvalue.replace(/ኝé/g, "ኜ");
    tvalue = tvalue.replace(/ኝo/g, "ኞ");
    tvalue = tvalue.replace(/ኛa/g, "ኟ");


    tvalue = tvalue.replace(/k/g, "ክ");
    tvalue = tvalue.replace(/ክe/g, "ከ");
    tvalue = tvalue.replace(/ክu/g, "ኩ");
    tvalue = tvalue.replace(/ክi/g, "ኪ");
    tvalue = tvalue.replace(/ክa/g, "ካ");
    tvalue = tvalue.replace(/ከe/g, "ኬ");
    tvalue = tvalue.replace(/ክé/g, "ኬ");
    tvalue = tvalue.replace(/ክo/g, "ኮ");
    tvalue = tvalue.replace(/ካa/g, "ኳ");


    tvalue = tvalue.replace(/ክኅ/g, "ኽ");
    tvalue = tvalue.replace(/ኽe/g, "ኸ");
    tvalue = tvalue.replace(/ኽu/g, "ኹ");
    tvalue = tvalue.replace(/ኽi/g, "ኺ");
    tvalue = tvalue.replace(/ኽa/g, "ኻ");
    tvalue = tvalue.replace(/ኸe/g, "ኼ");
    tvalue = tvalue.replace(/ኽé/g, "ኼ");
    tvalue = tvalue.replace(/ኽo/g, "ኾ");

    tvalue = tvalue.replace(/ኽው/g, "ዅ");
    tvalue = tvalue.replace(/ዅe/g, "ዀ");
    tvalue = tvalue.replace(/ዅu/g, "ዂ");
    tvalue = tvalue.replace(/ዅi/g, "ዂ");
    tvalue = tvalue.replace(/ዅa/g, "ዃ");
    tvalue = tvalue.replace(/ዀe/g, "ዄ");
    tvalue = tvalue.replace(/ዅé/g, "ዄ");


// kw
    tvalue = tvalue.replace(/ክው/g, "ኵ");
    tvalue = tvalue.replace(/ኵe/g, "ኰ");
    tvalue = tvalue.replace(/ኵi/g, "ኲ");
    tvalue = tvalue.replace(/ኵa/g, "ኳ");
    tvalue = tvalue.replace(/ኰe/g, "ኴ");
    tvalue = tvalue.replace(/ኵé/g, "ኴ");

    tvalue = tvalue.replace(/K/g, "ኽ");
    tvalue = tvalue.replace(/ክኅ/g, "ኽ");
    tvalue = tvalue.replace(/ኽe/g, "ኸ");
    tvalue = tvalue.replace(/ኽu/g, "ኹ");
    tvalue = tvalue.replace(/ኽi/g, "ኺ");
    tvalue = tvalue.replace(/ኽa/g, "ኻ");
    tvalue = tvalue.replace(/ኽe/g, "ኼ");
    tvalue = tvalue.replace(/ኽé/g, "ኼ");
    tvalue = tvalue.replace(/ኽo/g, "ኾ");
    tvalue = tvalue.replace(/ኽW/g, "ዃ");
    tvalue = tvalue.replace(/ዃe/g, "ዀ");
    tvalue = tvalue.replace(/ዃu/g, "ዅ");
    tvalue = tvalue.replace(/ዃi/g, "ዂ");
    tvalue = tvalue.replace(/ዃa/g, "ዃ");
    tvalue = tvalue.replace(/ዀe/g, "ዄ");
    tvalue = tvalue.replace(/ዃé/g, "ዄ");
    tvalue = tvalue.replace(/ዃ'/g, "ዅ");

    tvalue = tvalue.replace(/[Zž]/g, "ዥ");
    tvalue = tvalue.replace(/ዝህ/g, "ዥ");
    tvalue = tvalue.replace(/ዥe/g, "ዠ");
    tvalue = tvalue.replace(/ዥu/g, "ዡ");
    tvalue = tvalue.replace(/ዥi/g, "ዢ");
    tvalue = tvalue.replace(/ዥa/g, "ዣ");
    tvalue = tvalue.replace(/ዠe/g, "ዤ");
    tvalue = tvalue.replace(/ዥé/g, "ዤ");
    tvalue = tvalue.replace(/ዥo/g, "ዦ");
    tvalue = tvalue.replace(/ዣa/g, "ዧ");

    tvalue = tvalue.replace(/[yY]/g, "ይ");
    tvalue = tvalue.replace(/ይe/g, "የ");
    tvalue = tvalue.replace(/ይu/g, "ዩ");
    tvalue = tvalue.replace(/ይi/g, "ዪ");
    tvalue = tvalue.replace(/ይa/g, "ያ");
    tvalue = tvalue.replace(/የe/g, "ዬ");
    tvalue = tvalue.replace(/ይé/g, "ዬ");
    tvalue = tvalue.replace(/ይo/g, "ዮ");
    tvalue = tvalue.replace(/ያa/g, "ዯ");

    tvalue = tvalue.replace(/d/g, "ድ");
    tvalue = tvalue.replace(/ድe/g, "ደ");
    tvalue = tvalue.replace(/ድu/g, "ዱ");
    tvalue = tvalue.replace(/ድi/g, "ዲ");
    tvalue = tvalue.replace(/ድa/g, "ዳ");
    tvalue = tvalue.replace(/ደe/g, "ዴ");
    tvalue = tvalue.replace(/ድé/g, "ዴ");
    tvalue = tvalue.replace(/ድo/g, "ዶ");
    tvalue = tvalue.replace(/ዳa/g, "ዷ");

    tvalue = tvalue.replace(/ድድ/g, "ዽ");
    tvalue = tvalue.replace(/[Dḍ]/g, "ዽ");
    tvalue = tvalue.replace(/ዽe/g, "ዸ");
    tvalue = tvalue.replace(/ዽu/g, "ዹ");
    tvalue = tvalue.replace(/ዽi/g, "ዺ");
    tvalue = tvalue.replace(/ዽa/g, "ዻ");
    tvalue = tvalue.replace(/ዸe/g, "ዼ");
    tvalue = tvalue.replace(/ዽé/g, "ዼ");
    tvalue = tvalue.replace(/ዽo/g, "ዾ");
    tvalue = tvalue.replace(/ዻa/g, "ዿ");

    tvalue = tvalue.replace(/[jJǧ]/g, "ጅ");
    tvalue = tvalue.replace(/ጅe/g, "ጀ");
    tvalue = tvalue.replace(/ጅu/g, "ጁ");
    tvalue = tvalue.replace(/ጅi/g, "ጂ");
    tvalue = tvalue.replace(/ጅa/g, "ጃ");
    tvalue = tvalue.replace(/ጀe/g, "ጄ");
    tvalue = tvalue.replace(/ጅé/g, "ጄ");
    tvalue = tvalue.replace(/ጅo/g, "ጆ");
    tvalue = tvalue.replace(/ጃa/g, "ጇ");

    tvalue = tvalue.replace(/g/g, "ግ");
    tvalue = tvalue.replace(/ግe/g, "ገ");
    tvalue = tvalue.replace(/ግu/g, "ጉ");
    tvalue = tvalue.replace(/ግi/g, "ጊ");
    tvalue = tvalue.replace(/ግa/g, "ጋ");
    tvalue = tvalue.replace(/ገe/g, "ጌ");
    tvalue = tvalue.replace(/ግé/g, "ጌ");
    tvalue = tvalue.replace(/ግo/g, "ጎ");
    tvalue = tvalue.replace(/ጋa/g, "ጓ");

// gw
    tvalue = tvalue.replace(/ግው/g, "ጕ");
    tvalue = tvalue.replace(/ጕe/g, "ጐ");
    tvalue = tvalue.replace(/ጕi/g, "ጒ");
    tvalue = tvalue.replace(/ጕa/g, "ጓ");
    tvalue = tvalue.replace(/ጐe/g, "ጔ");
    tvalue = tvalue.replace(/ጕé/g, "ጔ");


    tvalue = tvalue.replace(/ግግ/g, "ጝ");
    tvalue = tvalue.replace(/G/g, "ጝ");
    tvalue = tvalue.replace(/ጝe/g, "ጘ");
    tvalue = tvalue.replace(/ጝu/g, "ጙ");
    tvalue = tvalue.replace(/ጝi/g, "ጚ");
    tvalue = tvalue.replace(/ጝa/g, "ጛ");
    tvalue = tvalue.replace(/ጘe/g, "ጜ");
    tvalue = tvalue.replace(/ጝé/g, "ጜ");
    tvalue = tvalue.replace(/ጝo/g, "ጞ");
    tvalue = tvalue.replace(/ጛa/g, "ጟ");

    tvalue = tvalue.replace(/[Tṭ]/g, "ጥ");
    tvalue = tvalue.replace(/ትህ/g, "ጥ");
    tvalue = tvalue.replace(/ጥe/g, "ጠ");
    tvalue = tvalue.replace(/ጥu/g, "ጡ");
    tvalue = tvalue.replace(/ጥi/g, "ጢ");
    tvalue = tvalue.replace(/ጥa/g, "ጣ");
    tvalue = tvalue.replace(/ጠe/g, "ጤ");
    tvalue = tvalue.replace(/ጥé/g, "ጤ");
    tvalue = tvalue.replace(/ጥo/g, "ጦ");
    tvalue = tvalue.replace(/ጣa/g, "ጧ");

    tvalue = tvalue.replace(/[Cċ]/g, "ጭ");
    tvalue = tvalue.replace(/ችህ/g, "ጭ");
    tvalue = tvalue.replace(/ጭe/g, "ጨ");
    tvalue = tvalue.replace(/ጭu/g, "ጩ");
    tvalue = tvalue.replace(/ጭi/g, "ጪ");
    tvalue = tvalue.replace(/ጭa/g, "ጫ");
    tvalue = tvalue.replace(/ጨe/g, "ጬ");
    tvalue = tvalue.replace(/ጭé/g, "ጬ");
    tvalue = tvalue.replace(/ጭo/g, "ጮ");
    tvalue = tvalue.replace(/ጫa/g, "ጯ");

    tvalue = tvalue.replace(/p̣/g, "ጵ");
    tvalue = tvalue.replace(/P/g, "ጵ");
    tvalue = tvalue.replace(/ፕህ/g, "ጵ");
    tvalue = tvalue.replace(/ጵe/g, "ጰ");
    tvalue = tvalue.replace(/ጵu/g, "ጱ");
    tvalue = tvalue.replace(/ጵi/g, "ጲ");
    tvalue = tvalue.replace(/ጵa/g, "ጳ");
    tvalue = tvalue.replace(/ጰe/g, "ጴ");
    tvalue = tvalue.replace(/ጵé/g, "ጴ");
    tvalue = tvalue.replace(/ጵo/g, "ጶ");
    tvalue = tvalue.replace(/ጳa/g, "ጷ");

    tvalue = tvalue.replace(/[Sṣ]/g, "ጽ");
    tvalue = tvalue.replace(/ትስ/g, "ጽ");
    tvalue = tvalue.replace(/ጽe/g, "ጸ");
    tvalue = tvalue.replace(/ጽu/g, "ጹ");
    tvalue = tvalue.replace(/ጽi/g, "ጺ");
    tvalue = tvalue.replace(/ጽa/g, "ጻ");
    tvalue = tvalue.replace(/ጸe/g, "ጼ");
    tvalue = tvalue.replace(/ጽé/g, "ጼ");
    tvalue = tvalue.replace(/ጽo/g, "ጾ");
    tvalue = tvalue.replace(/ጻa/g, "ጿ");

    tvalue = tvalue.replace(/ṡ/g, "ፅ");
    tvalue = tvalue.replace(/ṡ/g, "ፅ");
    tvalue = tvalue.replace(/ṡ/g, "ፅ");
    tvalue = tvalue.replace(/ትዝ/g, "ፅ");
    tvalue = tvalue.replace(/ፅe/g, "ፀ");
    tvalue = tvalue.replace(/ፅu/g, "ፁ");
    tvalue = tvalue.replace(/ፅi/g, "ፂ");
    tvalue = tvalue.replace(/ፅa/g, "ፃ");
    tvalue = tvalue.replace(/ፀe/g, "ፄ");
    tvalue = tvalue.replace(/ፅé/g, "ፄ");
    tvalue = tvalue.replace(/ፅo/g, "ፆ");
    tvalue = tvalue.replace(/ፃa/g, "ፇ");

    tvalue = tvalue.replace(/[fF]/g, "ፍ");
    tvalue = tvalue.replace(/ፍe/g, "ፈ");
    tvalue = tvalue.replace(/ፍu/g, "ፉ");
    tvalue = tvalue.replace(/ፍi/g, "ፊ");
    tvalue = tvalue.replace(/ፍa/g, "ፋ");
    tvalue = tvalue.replace(/ፈe/g, "ፌ");
    tvalue = tvalue.replace(/ፍé/g, "ፌ");
    tvalue = tvalue.replace(/ፍo/g, "ፎ");
    tvalue = tvalue.replace(/ፋa/g, "ፏ");

// non identif
//tvalue = tvalue.replace(/ፍY/g, "ፚ");
//tvalue = tvalue.replace(/ፚa/g, "ፚ");

    tvalue = tvalue.replace(/p/g, "ፕ");
    tvalue = tvalue.replace(/ፕe/g, "ፐ");
    tvalue = tvalue.replace(/ፕu/g, "ፑ");
    tvalue = tvalue.replace(/ፕi/g, "ፒ");
    tvalue = tvalue.replace(/ፕa/g, "ፓ");
    tvalue = tvalue.replace(/ፐe/g, "ፔ");
    tvalue = tvalue.replace(/ፕé/g, "ፔ");
    tvalue = tvalue.replace(/ፕo/g, "ፖ");
    tvalue = tvalue.replace(/ፓa/g, "ፗ");

// pharyngale
    tvalue = tvalue.replace(/ʿ/g, "ዕ");
    tvalue = tvalue.replace(/\"/g, "ዕ");
    tvalue = tvalue.replace(/ዕe/g, "ዐ");
    tvalue = tvalue.replace(/ዕu/g, "ዑ");
    tvalue = tvalue.replace(/ዕi/g, "ዒ");
    tvalue = tvalue.replace(/ዕa/g, "ዓ");
    tvalue = tvalue.replace(/ዐe/g, "ዔ");
    tvalue = tvalue.replace(/ዕé/g, "ዔ");
    tvalue = tvalue.replace(/ዕo/g, "ዖ");

    tvalue = tvalue.replace(/E/g, "ዐ");
    tvalue = tvalue.replace(/U/g, "ዑ");
    tvalue = tvalue.replace(/I/g, "ዒ");
    tvalue = tvalue.replace(/A/g, "ዓ");
    tvalue = tvalue.replace(/ዐዐ/g, "ዔ");
    tvalue = tvalue.replace(/É/g, "ዔ");
    tvalue = tvalue.replace(/O/g, "ዖ");

// glottales
    tvalue = tvalue.replace(/ʾ/g, "እ");
    tvalue = tvalue.replace(/\'/g, "እ");
    tvalue = tvalue.replace(/እe/g, "አ");
    tvalue = tvalue.replace(/እu/g, "ኡ");
    tvalue = tvalue.replace(/እi/g, "ኢ");
    tvalue = tvalue.replace(/እa/g, "ኣ");
    tvalue = tvalue.replace(/አe/g, "ኤ");
    tvalue = tvalue.replace(/እé/g, "ኤ");
    tvalue = tvalue.replace(/እo/g, "ኦ");
    tvalue = tvalue.replace(/ኣa/g, "ኧ");

    tvalue = tvalue.replace(/e/g, "አ");
    tvalue = tvalue.replace(/u/g, "ኡ");
    tvalue = tvalue.replace(/i/g, "ኢ");
    tvalue = tvalue.replace(/a/g, "ኣ");
    tvalue = tvalue.replace(/አአ/g, "ኤ");
    tvalue = tvalue.replace(/é/g, "ኤ");
    tvalue = tvalue.replace(/o/g, "ኦ");
    tvalue = tvalue.replace(/ኣኣ/g, "ኧ");

//ponctuation
    tvalue = tvalue.replace(/-/g, "፡");
    tvalue = tvalue.replace(/\./g, "።");
    tvalue = tvalue.replace(/\,/g, "፣");
    tvalue = tvalue.replace(/\;/g, "፤");
    tvalue = tvalue.replace(/\:/g, "፥");
    tvalue = tvalue.replace(/\!/g, "፦");
    tvalue = tvalue.replace(/\?/g, "፧");
    tvalue = tvalue.replace(/\//g, "፨");

    tvalue = tvalue.replace(/1/g, "፩");
    tvalue = tvalue.replace(/2/g, "፪");
    tvalue = tvalue.replace(/3/g, "፫");
    tvalue = tvalue.replace(/4/g, "፬");
    tvalue = tvalue.replace(/5/g, "፭");
    tvalue = tvalue.replace(/6/g, "፮");
    tvalue = tvalue.replace(/7/g, "፯");
    tvalue = tvalue.replace(/8/g, "፰");
    tvalue = tvalue.replace(/9/g, "፱");
    tvalue = tvalue.replace(/፩0/g, "፲");
    tvalue = tvalue.replace(/፪0/g, "፳");
    tvalue = tvalue.replace(/፫0/g, "፴");
    tvalue = tvalue.replace(/፬0/g, "፵");
    tvalue = tvalue.replace(/፭0/g, "፶");
    tvalue = tvalue.replace(/፮0/g, "፷");
    tvalue = tvalue.replace(/፯0/g, "፸");
    tvalue = tvalue.replace(/፰0/g, "፹");
    tvalue = tvalue.replace(/፱0/g, "፺");
    tvalue = tvalue.replace(/፲0/g, "፻");
    tvalue = tvalue.replace(/፳0/g, "፪፻");
    tvalue = tvalue.replace(/፺0/g, "፱፻");
    tvalue = tvalue.replace(/፻0/g, "፲፻");
    tvalue = tvalue.replace(/፲፻0/g, "፼");

    return tvalue;
  }

}
