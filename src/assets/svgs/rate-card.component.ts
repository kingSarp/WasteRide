import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IRate } from 'src/app/shared/models/rates.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.component.html',
  styleUrls: ['./rate-card.component.scss']
})
export class RateCardComponent implements OnInit {


  //@ts-ignore
  @Input() rate: IRate;



  constructor() { }

  ngOnInit(): void {
  }

  assetUrl = environment.assetsUrl;

  FLAGS :{[key : string] : string} = {
    "USD" : this.assetUrl+'/assets/svgs/Icons-Flags-USA.svg',
    "EUR" : this.assetUrl+'/assets/svgs/avatar_flag_european_union.svg',
    "ZAR" : this.assetUrl+'/assets/svgs/Flag_of_South_Africa.svg',
    "GBP" : this.assetUrl+'/assets/svgs/Flag_of_the_United_Kingdom.svg'
  }


  getFlag(country : string){
    return this.FLAGS[country] 
  }
}
