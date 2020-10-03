import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {

  createDb(): { products: Product[]} {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Donut',
        productCode: 'DN-0011',
        releaseDate: 'YES',
        description: '',
        price: 100,
        starRating: 4.4,
        imageUrl: 'assets/images/donut.jpg',
        category: 'Sweet',
        tags: ['Sweet', 'cake', 'birthday', 'party']
      },
      {
        id: 2,
        productName: 'Pizza',
        productCode: 'GDN-0023',
        releaseDate: 'YES',
        description: '15 gallon capacity rolling garden cart',
        price: 300,
        starRating: 4.2,
        imageUrl: 'assets/images/Pizza.jpg',
        category: 'pizza'
      },
      {
        id: 5,
        productName: 'Juice',
        productCode: 'TBX-0048',
        releaseDate: 'Yes',
        description: 'Curved claw steel hammer',
        price: 60,
        starRating: 4.8,
        imageUrl: 'assets/images/Juice.jpg',
        category: 'juice',
        tags: ['fresh', 'natural', 'energy']
      },
      {
        id: 8,
        productName: 'Pasta',
        productCode: 'TBX-0022',
        releaseDate: 'YES',
        description: '15-inch steel blade hand saw',
        price: 200,
        starRating: 3.7,
        imageUrl: 'assets/images/Pasta.jpg',
        category: 'pasta'
      },
      {
        id: 10,
        productName: 'Burger',
        productCode: 'GMG-0042',
        releaseDate: 'YES',
        description: 'Standard two-button video game controller',
        price: 120,
        starRating: 4.6,
        imageUrl: 'assets/images/Burger.jpg',
        category: 'burger'
      }
    ];
    return { products };
  }
}
