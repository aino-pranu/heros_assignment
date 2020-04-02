import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROS } from '../mock_heros';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  //heros = HEROS; 
  selectedHero : Hero;

  heros :Hero[];

  constructor(private heroService : HeroService, private messageService : MessageService) { }

// compo="Winsdome";
  

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add('HeroService: Selected hero id = ${hero.id}');
  }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(heros => this.heros = heros);
  }
}
