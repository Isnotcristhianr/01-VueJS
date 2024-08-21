import { defineStore } from "pinia";
import { computed, reactive } from "vue";

//asignar el tipado
interface Product {
  img: string;
  name: string;
  value: number;
}

interface SelectedProduct extends Product {
  quantity: number;
}

interface ProductStore {
  available: Product[];
  selected: SelectedProduct[];
  quantity: () => number;
}

export const useProductStore = defineStore("product", () => {
  const products: ProductStore = reactive<ProductStore>({
    available: [
      {
        img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 1",
        value: 100,
      },
      {
        img: "https://images.unsplash.com/photo-1564020426549-fabfb8c467ad?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 2",
        value: 200,
      },
      {
        img: "https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 3",
        value: 300,
      },
      {
        img: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=1624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 4",
        value: 400,
      },
      {
        img: "https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 5",
        value: 500,
      },
      {
        img: "https://images.unsplash.com/photo-1617858123189-b26eb62d8eb4?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Product 6",
        value: 600,
      },
    ],
    selected: [],
    quantity: () => products.selected.length > 0
      ? products.selected.map((products) => products.quantity).reduce((a, b) => a + b)
      : 0,
  });

  //agregrar
  const addProduct = (product: Product) => {
    const productExist = products.selected.find(
      (selectedProduct) => selectedProduct.name === product.name
    );

    //solo agregar un solo producto
    if (productExist) {
      productExist.quantity++;
      return;
    }

    products.selected.push({ ...product, quantity: 1 });
    console.log(products.selected);
  };

  //cantidad
  /* const quantity = computed(() =>
    products.selected.length > 0
      ? products.selected.map((products) => products.quantity)
      : 0
  ); */

  return {
    products,
    addProduct,
  };
});
