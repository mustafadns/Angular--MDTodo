import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService
  ) {}
  tittle = 'TARİH BİLGİSİ';

  categories: Category[] | undefined;
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    });
  }
}
