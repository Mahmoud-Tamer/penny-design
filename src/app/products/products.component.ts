import { Component } from '@angular/core';
import { Product } from './model/product';

const PRODUCTS: Product[] = [
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'no_img.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: true,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },

  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'no_img.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: true,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
  {
    image: 'product.svg',
    name: 'Apple Bluetooth, for Laptop/Desktop...',
    code: 'SKU: GH-BMM-0348',
    price: 180,
    addedToCart: false,
  },
];

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = PRODUCTS;
}
