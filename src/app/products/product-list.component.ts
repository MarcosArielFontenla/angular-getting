import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  productListTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImageBtn: boolean = false;

  private _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  productsArray: IProduct[] = [{
    "productId": 1,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2022",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },
  {
    "productId": 5,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2021",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://openclipart.org/image/400px/73"
  }
];

  constructor() {
  }

  ngOnInit(): void {
    this._listFilter = "cart";
  }

  toggleImage(): void {
    this.showImageBtn = !this.showImageBtn;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productsArray.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.productListTitle = "Product list: " + message;
  }

}
