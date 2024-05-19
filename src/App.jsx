import React, { createContext, useState } from "react";
import Card from "./Components/Card";

export const myContext = createContext("");

const App = () => {
  const products = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBstcuq2JonnIYPa0IhCHKiG9mvnhxDobsA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_tBh4s05ig1IzR8UwVeFqr4C0jlvZdi2WA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj07KL4OCqrz_IFtci2F92KFxBTMa5mWUyeA&s",
      ],
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw6M-GFHCbjazdEJSTb1zfwCr1o2GwPbJoQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4BPkmtgMSSxPbopOuZCtH_-WxxhOyzt2MA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj07KL4OCqrz_IFtci2F92KFxBTMa5mWUyeA&s",
      ],
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtsiny8Q2ZCWqYpou1-gO4kFQ2LbBr2zE9rA&s",
      ],
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa_IUty-8f4H4o1Y2Kwtit3yJvnfYMuaqR0A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq27OF85apd7UQBDKlVK0mdYnxe33dHByg3g&s",
      ],
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjqGz1r7i_tMAhpwduda5GmHgLmX0uYLcw0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTusxq0P1DhHr-6KNAOkJq0hSeVFe9UAeeGvA&s",
      ],
    },
  ];
  const [data, setData] = useState(products);
  return (
    <div>
      <myContext.Provider value={[data, setData]}>
        <Card />
      </myContext.Provider>
    </div>
  );
};

export default App;
