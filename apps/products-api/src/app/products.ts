import { Express } from 'express';

interface Products {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Products[] = [
  {
    id: '123',
    name: 'Product 1',
    price: 49.99,
    description: 'A high-quality product that is built to last.',
  },
  {
    id: '345',
    name: 'Product 2',
    price: 59.99,
    description: 'An innovative product that is designed for maximum efficiency.',
  },
  {
    id: '456',
    name: 'Product 3',
    price: 79.99,
    description: 'A premium product that offers superior performance and reliability.',
  },
  {
    id: '678',
    name: 'Product 4',
    price: 89.99,
    description: 'A high-end product that is perfect for demanding applications.',
  },
  {
    id: '890',
    name: 'Product 5',
    price: 99.99,
    description: 'A cutting-edge product that sets the standard for quality and performance.',
  }

];

export function productRoutes(app: Express) {
  app.get('/products-api/products', (req, res) => {
    res.send(products);
  });

  app.post('/products-api/products', (req, res) => {
    const { name, price, description } = req.body;

    if (!name || !price || !description) {
      res.status(400).send({ message: 'Bad request' });
      return;
    }

    const newProduct = {
      id: Math.floor(Math.random() * 900 + 100).toString(),
      name,
      price,
      description,
    };

    products.push(newProduct);
    res.status(201).send(newProduct);
  });

  app.get('/products-api/products/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({ message: 'Bad request' });
      return;
    }

    res.send(products.find(product => product.id === req.params.id));
  });

  app.put('/products-api/products/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({ message: 'Bad request' });
      return;
    }

    const index = products.findIndex(product => product.id === req.params.id);
    products[index] = req.body;
    res.status(200).send(products[index]);
  });

  app.delete('/products-api/products/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
      res.status(400).send({ message: 'Bad request' });
      return;
    }

    const index = products.findIndex(product => product.id === req.params.id);
    res.status(200).send(products.splice(index, 1)[0]);
  });
}
