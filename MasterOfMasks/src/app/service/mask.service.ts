import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Mask } from '../model/mask';

@Injectable({
  providedIn: 'root'
})

export class MaskService {

  list:Mask [] = [
    {name: 'Ciao maszk',
    description: 'Hidd el nekem, ennyiért ez nem pénzrablás',
    price: 3990,
    imgurl: '../assets/img/cards/ciao.jpg'},

    {name: 'Spider maszk',
    description: 'Ezzel a maszkkal mindenkit behálózol.',
    price: 4990,
    imgurl: '../assets/img/cards/spider.jpg'},

    {name: 'Lecter maszk',
    description: 'Viselése igazán lebilincselő élmény.',
    price: 3990,
    imgurl: '../assets/img/cards/lecter.jpg'},

    {name: 'Hulk maszk',
    description: 'Habár zöld, ezzel az arcodon, garantáltan nem tűnsz majd éretlennek.',
    price: 3990,
    imgurl: '../assets/img/cards/hulk.jpg'},
  ];

  list$: BehaviorSubject<Mask[]> = new BehaviorSubject<Mask[]>(this.list);

  constructor() { }

}
