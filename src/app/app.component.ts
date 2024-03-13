import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {  
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
