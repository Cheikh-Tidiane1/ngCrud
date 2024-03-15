import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.css',
})
export class AjouterComponent implements OnInit {
  titleToAdd: string = '';
  priceToAdd: string = '';
  constructor() {}
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd;
    const newPrice = this.priceToAdd;
  }
}
