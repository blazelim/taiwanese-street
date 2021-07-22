const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Meat' },
    { name: 'Vegetable' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Crab Sticks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.',
      image: 'crab-stick-f.jpg',
      category: categories[0]._id,
      price: 8.99,
    },
    {
      name: 'Large Sausage',
      description:
        'ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.',
      image: 'large-sausage-f.jpg',
      category: categories[0]._id,
      price: 9.99,
    },
    {
      name: 'Quail Egg',
      category: categories[0]._id,
      description:
        'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa',
      image: 'quail-egg-f.jpg',
      price: 7.99,
    },
    {
      name: 'Short Sausages',
      category: categories[0]._id,
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa',
      image: 'short-sausages-f.jpg',
      price: 7.99,
    },
    {
      name: 'Shrimp',
      category: categories[0]._id,
      description:
        'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit',
      image: 'shrimp-f.jpg',
      price: 14.99,
    },
    {
      name: 'Chicken',
      category: categories[0]._id,
      description:
        'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam.',
      image: 'fried-chicken.jpg',
      price: 9.99,
    },
    {
      name: 'Cilantro',
      category: categories[1]._id,
      description:
        'est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et',
      image: 'cilantro-f.jpg',
      price: 4.99,
    },
    {
      name: 'Eggplant',
      category: categories[1]._id,
      description:
        'dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit',
      image: 'eggplant-f.jpg',
      price: 9.99,
    },
    {
      name: 'Lettuce',
      category: categories[1]._id,
      description: 'laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil',
      image: 'lettuce-f.jpg',
      price: 4.99,
    },
    {
      name: 'Lotus Root',
      category: categories[1]._id,
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos',
      image: 'lotus-root-f.jpg',
      price: 5.99,
    },
    {
      name: 'Mushroom',
      category: categories[1]._id,
      description:
        'dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id',
      image: 'mushroom-f.jpg',
      price: 3.99,
    },
    {
      name: 'Pepper',
      category: categories[1]._id,
      description:
        'est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est',
      image: 'pepper-f.jpg',
      price: 4.99,
    },
    {
        name: 'Potato',
        category: categories[1]._id,
        description:
          'eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor',
        image: 'pepper-f.jpg',
        price: 5.99,
      }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
