const Products = [
  {
    id: '1',
    name: 'Legion Tower 5i',
    price: 999.99,
    gpu: 'RTX 3060',
    cpu: 'i7 12700',
    ram: '16',
    hdd: '1000',
    ssd: '256',
  },
  {
    id: '2',
    name: 'TraceMR',
    price: 1849.99,
    gpu: 'RTX 3080',
    cpu: 'i7 12700KF',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
  {
    id: '3',
    name: 'SlateMESH',
    price: 1249.99,
    gpu: 'RTX 3060',
    cpu: 'i7 12700F',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '4',
    name: 'ASUS - ROG',
    price: 699.99,
    gpu: 'GTX 1660 Ti',
    cpu: 'i5 11400F',
    ram: '16',
    hdd: '-',
    ssd: '512',
  },
  {
    id: '5',
    name: 'Gamer Master',
    price: 1199.99,
    gpu: 'RTX 3060',
    cpu: 'Ryzen 7 5700',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '6',
    name: 'Gamer Master 2',
    price: 1169.99,
    gpu: 'RX 6600 XT',
    cpu: 'Ryzen 7 5700X',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '7',
    name: 'Gamer Supreme',
    price: 1449.99,
    gpu: 'RTX 3070',
    cpu: 'Ryzen 7 5700',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
  {
    id: '8',
    name: 'SlateMR294i',
    price: 1499.99,
    gpu: 'RTX 3070 Ti',
    cpu: 'i9 11900KF',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
  {
    id: '9',
    name: 'Gamer Supreme 2',
    price: 2179.99,
    gpu: 'RTX 3070 Ti',
    cpu: 'i9 13900KF',
    ram: '16',
    hdd: '2000',
    ssd: '1000',
  },
  {
    id: '10',
    name: 'CLX - SET',
    price: 3659.99,
    gpu: 'RTX 3090 Ti',
    cpu: 'i9 12900KF',
    ram: '64',
    hdd: '6000',
    ssd: '1000',
  },
];

const B0k1k = [
  {
    id: '1',
    name: 'Legion Tower 5i',
    price: 999.99,
    gpu: 'RTX 3060',
    cpu: 'i7 12700',
    ram: '16',
    hdd: '1000',
    ssd: '256',
  },
  {
    id: '4',
    name: 'ASUS - ROG',
    price: 699.99,
    gpu: 'GTX 1660 Ti',
    cpu: 'i5 11400F',
    ram: '16',
    hdd: '-',
    ssd: '512',
  },
];

const B1k2k = [
  {
    id: '2',
    name: 'TraceMR',
    price: 1849.99,
    gpu: 'RTX 3080',
    cpu: 'i7 12700KF',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
  {
    id: '3',
    name: 'SlateMESH',
    price: 1249.99,
    gpu: 'RTX 3060',
    cpu: 'i7 12700F',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '5',
    name: 'Gamer Master',
    price: 1199.99,
    gpu: 'RTX 3060',
    cpu: 'Ryzen 7 5700',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '6',
    name: 'Gamer Master 2',
    price: 1169.99,
    gpu: 'RX 6600 XT',
    cpu: 'Ryzen 7 5700X',
    ram: '16',
    hdd: '1000',
    ssd: '500',
  },
  {
    id: '7',
    name: 'Gamer Supreme',
    price: 1449.99,
    gpu: 'RTX 3070',
    cpu: 'Ryzen 7 5700',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
  {
    id: '8',
    name: 'SlateMR294i',
    price: 1499.99,
    gpu: 'RTX 3070 Ti',
    cpu: 'i9 11900KF',
    ram: '16',
    hdd: '1000',
    ssd: '1000',
  },
];

const B2k3k = [
  {
    id: '9',
    name: 'Gamer Supreme 2',
    price: 2179.99,
    gpu: 'RTX 3070 Ti',
    cpu: 'i9 13900KF',
    ram: '16',
    hdd: '2000',
    ssd: '1000',
  },
];

const B3k4k = [
  {
    id: '10',
    name: 'CLX - SET',
    price: 3659.99,
    gpu: 'RTX 3090 Ti',
    cpu: 'i9 12900KF',
    ram: '64',
    hdd: '6000',
    ssd: '1000',
  },
];

function GetProductData(id) {
  let productData = Products.find((product) => product.id === id);

  if (productData == undefined) {
    console.log('product ' + id + " doesn't exist");
  }

  return productData;
}

export { Products, GetProductData, B0k1k, B1k2k, B2k3k, B3k4k };
