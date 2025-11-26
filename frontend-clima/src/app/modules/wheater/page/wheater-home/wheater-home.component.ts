import { WheaterDatas } from 'src/app/models/interfaces/WheaterDatas';
import { WheaterService } from './../../services/wheater.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: []
})
export class WheaterHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  wheaterDatas!: WheaterDatas;
  searchIcon = faMagnifyingGlass;


  constructor(private wheaterService: WheaterService) {}

  ngOnInit(): void {
    this.getWheaterDatas(this.initialCityName);
  }

  getWheaterDatas(cityName: string): void{
  this.wheaterService.getWheaterDatas(cityName)
  .pipe(
    takeUntil(this.destroy$)
  )
  .subscribe({
    next: (response) => {
      response &&(this.wheaterDatas = response);
      console.log(this.wheaterDatas)
    },
    error: (error) => console.log(error),
  })
  }

  onSubmit(): void{
    this.getWheaterDatas(this.initialCityName);
    this.initialCityName = '';

  }

  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
