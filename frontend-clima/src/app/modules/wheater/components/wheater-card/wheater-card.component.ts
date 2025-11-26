import { WheaterDatas } from 'src/app/models/interfaces/WheaterDatas';
import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-card',
  templateUrl: './wheater-card.component.html',
  styleUrls: []
})
export class WheaterCardComponent  {
  @Input() WheaterDatasInput!: WheaterDatas;
  //dados da previsão do tempo recebidos do pai
  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;


}
