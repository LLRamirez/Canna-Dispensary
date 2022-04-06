import Product from '../models/products';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Red Shirt',
    'https://images.pexels.com/photos/7773108/pexels-photo-7773108.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'A red t-shirt, perfect for days with non-red weather.',
    29.99,
    "21%",
    "0%",
    'spicy/herbal'
  ),
  new Product(
    'p2',
    'u1',
    'Blue Carpet',
    'https://images.pexels.com/photos/7773110/pexels-photo-7773110.jpeg?auto',
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99,
    "24%",
    "3%",
    'fruity/sweet'
  ),
  new Product(
    'p3',
    'u2',
    'Coffee Mug',
    'https://images.pexels.com/photos/7667900/pexels-photo-7667900.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'Can also be used for tea!',
    8.99,
    "18%",
    "0%",
    'cheese'
  ),
  new Product(
    'p4',
    'u3',
    'The Book - Limited Edition',
    'https://images.pexels.com/photos/7667906/pexels-photo-7667906.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    "What the content is? Why would that matter? It's a limited edition!",
    15.99,
    "30%",
    "0%",
    'earthy'
  ),
  new Product(
    'p5',
    'u3',
    'PowerBook',
    'https://images.pexels.com/photos/9259985/pexels-photo-9259985.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99,
    "24%",
    "0%",
    'tar'
  ),
  new Product(
    'p6',
    'u1',
    'Pen & Paper',
    'https://images.pexels.com/photos/7773104/pexels-photo-7773104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49,
    "32%",
    "0%",
    'lemon'
  ),
  new Product(
    'p7',
    'u1',
    'Fruity Pebbles',
    'https://images.pexels.com/photos/7773109/pexels-photo-7773109.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49,
    "26%",
    "0%",
    'fruity'
  ),
  new Product(
    'p8',
    'u2',
    'Ninja Fruit',
    'https://images.pexels.com/photos/7667800/pexels-photo-7667800.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49,
    "19%",
    "0%",
    'grapefruit'
  )
];

export default PRODUCTS;