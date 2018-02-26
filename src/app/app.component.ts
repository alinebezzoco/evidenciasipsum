import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EvidênciasIpsum';

  lyrics: any;

  evidenciasObj = [
    "Substiti dicere, cum vos Est quia te amo Cum dicere nolo te amplius: Hoc est quod volo Vereor ut cor meum tibi dare Et ego fateor in tua potestate Sed neque imaginari possunt, Quid fiet de me Si illa deesset",

    "Ut frangerent, et ab tibi Sed deditionis EGO amo, ut ego non dicam sunt Sed postea negare tibi Verum Quia Furiosa sum vobis Et cogitare de amissis non timeo, Mihi opus est accipere quod illic 'magis Animabus separatis",

    "Et haec insania non vis dicere Ego visionem negare Quod in simulatione At enim se debuisse vivet Si mei non fatuus Scio te amo Nullum mendacium magis Ad negare desiderio meo Volo enim vos magis quam erat: Mihi opus basium tuum Gratias meae Nam quid tibi vis faciam vobis Vis audire quod iustum est",

    "Dicit quod suus 'verum, quod misses Adhuc me quoque putas, Dicit quod suus 'verum, quod misses Adhuc vivo et vos vultis mihi"
  ];


  constructor() {



  }

  ngOnInit() {
    this.randomParagraph();

    var a2a_config = a2a_config || {};
    a2a_config.linkname = this.lyrics;
    a2a_config.linkurl = "http://evidenciasipsum.github.io";
    a2a_config.locale = "pt-BR";
    a2a_config.num_services = 3;
  }

  randomParagraph() {
    this.lyrics = this.evidenciasObj[Math.floor(Math.random() * this.evidenciasObj.length)];
    document.getElementById('randomLyrics').innerHTML = this.lyrics;


  }
}
