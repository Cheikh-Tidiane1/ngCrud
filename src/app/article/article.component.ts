import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() urlImg: string;
  @Input() altImg: string;
  @Input() description: string;
  @Input() dispo: boolean;
  @Input() idArticle: number ;
  totalLike: number = 0;
  color: string;
  like: boolean = true;
  comment: string = 'ceci est un commentaire';
  @Output() info = new EventEmitter<string>();

  onLike() {
    if(this.like){
      this.totalLike++;
      this.like = false;
    }else{
      this.totalLike--;
      this.like = true;
    }
    this.info.emit(this.titreArticle);
  }

  getColor(): string {
    return (this.color = this.dispo ? 'green' : 'red');
  }
}
