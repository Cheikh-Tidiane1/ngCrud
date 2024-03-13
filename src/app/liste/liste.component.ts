import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ArticleComponent } from '../article/article.component';
@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent implements OnInit {
  listeArticle: any;
  constructor(private dataservice: DataService) {}
  ngOnInit(): void {
    this.listeArticle = this.dataservice.listeArticle
  }
  message: string = '';
  onAffiche(arg: string): string {
    return (this.message = `Merci d'avoir Voté pour l'article: ${arg}`);
  }
}
