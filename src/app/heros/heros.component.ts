import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
//import { HEROS } from '../mock_heros';
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss']
})
export class HerosComponent implements OnInit {

  //heros = HEROS; 
  //selectedHero : Hero;

  heros :Hero[];

  constructor(private heroService : HeroService) { }

// compo="Winsdome";
  
  ngOnInit() {
    this.getHeros();
  }

  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero;
  //   this.messageService.add('HeroService: Selected hero id = ${hero.id}');
  // }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(heros => this.heros = heros);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heros.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heros = this.heros.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
