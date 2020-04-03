import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Hero} from './hero';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){

    const heros = [
    {id : 1, name: 'panu'},
    {id : 2, name : 'rutuja'},
    {id : 3, name : 'akshay'},
    {id : 4, name : 'priyanka'},
    {id : 5, name : 'pratik'},
    {id : 6, name : 'gauri'},
    {id : 7, name : 'priyesh'},
    {id : 8, name : 'payal'},
    {id : 9, name : 'vaishnavi'},
    {id : 10, name : 'shital'}
];
return {heros};

}
genId(heros:Hero[]):number{
  return heros.length>0 ? Math.max(...heros.map(hero=>hero.id))+1 :1;
}

  constructor() { }
}
