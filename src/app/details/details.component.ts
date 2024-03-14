import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  id: number;
  prix: number;
  titre: string;
  description: string;
  urlImg: string;
  
  constructor(private route: ActivatedRoute, private dataService: DataService){}
  ngOnInit(): void {
   const  id =  this.route.snapshot.params["id"]
   this.prix = this.dataService.getArticles(id)!.prixArticle
   this.titre = this.dataService.getArticles(id)!.titreArticle
   this.description = this.dataService.getArticles(id)!.description
   this.urlImg = this.dataService.getArticles(id)!.urlImg
  }


}
