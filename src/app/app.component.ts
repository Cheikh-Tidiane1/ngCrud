import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { interval , Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit ,OnDestroy {
  secondes: string;
  compteurSubscriber: Subscription ;
  constructor() {}
  
  ngOnInit(): void {
    const compteur = interval(1000).pipe(
      map(value => value % 2 == 0 ? `${value} est pair`: `${value} est impair`)
    ) ;

    this.compteurSubscriber = compteur.subscribe({
      next: (v) => this.secondes = v,
      error: (e) => console.log(e),
      complete: () => console.log("complete")
    })
  }

  ngOnDestroy(): void {
    this.compteurSubscriber.unsubscribe();
  }
}
