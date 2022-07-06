import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
	private counterId = 1;
	private products: Product[] = [
		{
			id: 1,
			name: 'Product 1',
			description: 'product description',
			price: 222,
			stock: 11,
			image: '',
		},
	];

	findAll() {
		return this.products;
	}

	findOne(id: number) {
		return this.products.find((item) => item.id === id);
	}

	create(payload: any) {
		this.counterId = this.counterId + 1;
		const newProduct = {
			id: this.counterId,
			...payload,
		};
		this.products.push(newProduct);
		return newProduct;
	}

	update(id: number, payload: any) {
		const product = this.findOne(id);
		if (product) {
			const index = this.products.findIndex((item) => item.id === id);
			this.products[index] = {
				...product,
				...payload,
			};
			return this.products[index];
		}
		return null;
	}

	delete(id: number) {
		const index = this.products.findIndex((item) => item.id === id);

		this.products.splice(index, 1);
		return true;
	}
}