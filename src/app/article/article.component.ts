import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

  @Input() titreArticle!: string ;
  @Input() prixArticle!: number ;
  // titreArticle: string = 'Vélo';
  // prixArticle: number = 1000;
  urlImg: string = 'https://via.placeholder.com/400x250';
  altImg: string = 'Vélo';
  totalLike: number = 0;
  comment: string = "ceci est un commentaire"
  @Output() info  = new EventEmitter<string>()

  onLike() {
    this.totalLike++;
    this.info.emit(this.titreArticle)
  }
}
