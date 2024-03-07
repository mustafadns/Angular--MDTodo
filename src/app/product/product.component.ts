import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  
  constructor(
    private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) {}
  tittle = 'TODO LİSTESİ';
  products: Product[] | undefined;



  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data
      });
    })
  }

  okeyTodo(product: any) {
    // this.products = this.products?.filter(p => p !== product);
    // this.productService.addCompletedTodos(product).subscribe();


    this.alertifyService.success(
      product.tittle + ' ' + "Todo'su Tamamlandı Tebrik Ederim :))"
    );
  }

  deleteTodo(product:Product) : void{
    this.products = this.products?.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();

    this.alertifyService.error(
      product.tittle + ' ' + "Todo'su Silindi :(("
    );
  }
}
