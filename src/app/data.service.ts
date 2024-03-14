import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }
  listeArticle = [
    {
      id: 1,
      titreArticle: 'Iphone 15',
      prixArticle: 1100,
      description: 'iPhone 15 128GB Noir',
      urlImg: '../assets/images/iphone-15-pro.jpg',
      altImg: 'Iphone 15',
      dispo: true,
    },
    {
      id: 2,
      titreArticle: 'MacBook Air M3',
      prixArticle: 2100,
      description: 'Apple - 13,6" MacBook Air M3 (2024)',
      urlImg: '../assets/images/Macbook.jpg',
      altImg: 'MacBook Air M3',
      dispo: false,
    },
    {
      id: 3,
      titreArticle: 'Apple watch serie 9',
      prixArticle: 940,
      description: 'Apple Watch Series 9 GPS - 41mm',
      urlImg: '../assets/images/apple-w.jpg',
      altImg: 'Apple watch serie 6',
      dispo: true,
    },
  ];
  

  getArticles(id: number){
    return this.listeArticle.find(a => a.id == id) ;
  }
}
