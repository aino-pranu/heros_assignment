import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock_heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // getHero() : Hero[]{
  //   return HEROS;
  // }

  // getHeros(): Observable<Hero[]> {
  //   return of(HEROS);
  // }

  getHeros() :Observable<Hero[]>{
    this.messageService.add('HerosService : fetched heros');
    return of(HEROS);
  }


  constructor(private messageService : MessageService) { }
}
