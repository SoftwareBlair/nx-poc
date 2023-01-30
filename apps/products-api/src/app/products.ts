import { Express } from 'express';

interface Products {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: Products[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    description: 'This is product 1'
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    description: 'This is product 2'
  },
  {
    id: '3',
    name: 'Product 3',
    price: 300,
    description: 'This is product 3'
  },
];

export function productRoutes(app: Express) {
  app.get('/api/products', (req, res) => {
    res.send(products);
  });

  app.post('/api/products', (req, res) => {
    const { id, name, price, description } = req.body;

    if (!id || !name || !price || !description) {
      res.status(400).send({ message: 'Bad request' });
      return;
    }

    products.push(req.body);
    res.status(201).send(req.body);
  });

  app.get('/api/products/:id', (req, res) => {
    res.send(products.find(product => product.id === req.params.id));
  });

  app.put('/api/products/:id', (req, res) => {
    const index = products.findIndex(product => product.id === req.params.id);
    products[index] = req.body;
    res.status(200).send(products[index]);
  });

  app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(product => product.id === req.params.id);
    products.splice(index, 1);
    res.status(200).send({});
  });
}
