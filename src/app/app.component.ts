import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {

  constructor(){}
  ngOnInit(): void {
    console.log("hello");
  }
  prix1: number = 1200;
  prix2: number = 1500;
  prix3: number = 2200;
  message: string = "";

  onAffiche(arg: string): string{
    return this.message = `Merci d'avoir Voté pour l'article: ${arg}`

  }
}
