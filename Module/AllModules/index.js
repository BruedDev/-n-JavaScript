// export mảng Navlist ở header
export const ArrNavList = [
  {
    home: 'Home',
  },
  {
    about: 'about',
  },
  {
    hello: 'hello',
  },
  {
    facebook: 'facebook',
  },
  {
    youtube: 'youtube',
  },
  {
    youtube: 'youtube',
  },
  {
    youtube: 'youtube',
  },
]
// APi về products
export const Products = (limit) => {
  return fetch(`https://dummyjson.com/products?limit=${limit}`)
    .then(res => res.json())
    .then(data => {
      return data.products;
    });
};
