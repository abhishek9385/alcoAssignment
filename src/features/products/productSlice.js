import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: [
    {
      "name": "image1",
      "price": 25,
      "description": "This is image 1",
      "image": "",
    },
    {
      "name": "image2",
      "price": 25,
      "description": "This is image 2",
      "image": "",
    },
    {
      "name": "image3",
      "price": 25,
      "description": "This is image 3",
      "image": "",
    },
    {
      "name": "image4",
      "price": 25,
      "description": "This is image 4",
      "image": "",
    },
    {
      "name": "image5",
      "price": 25,
      "description": "This is image 5",
      "image": "",
    },
    {
      "name": "image6",
      "price": 25,
      "description": "This is image 6",
      "image": "",
    },
    {
      "name": "image7",
      "price": 25,
      "description": "This is image 7",
      "image": "",
    },
    {
      "name": "image8",
      "price": 25,
      "description": "This is image 8",
      "image": "",
    },
    {
      "name": "image9",
      "price": 25,
      "description": "This is image 9",
      "image": "",
    },
    {
      "name": "image10",
      "price": 25,
      "description": "This is image 10",
      "image": "",
    },
    {
      "name": "image11",
      "price": 25,
      "description": "This is image 11",
      "image": "",
    },
    {
      "name": "image12",
      "price": 25,
      "description": "This is image 12",
      "image": "",
    },
    {
      "name": "image13",
      "price": 25,
      "description": "This is image 13",
      "image": "",
    },
    {
      "name": "image14",
      "price": 25,
      "description": "This is image 14",
      "image": "",
    },
    {
      "name": "image15",
      "price": 25,
      "description": "This is image 15",
      "image": "",
    },
    {
      "name": "image16",
      "price": 25,
      "description": "This is image 16",
      "image": "",
    },
    {
      "name": "image17",
      "price": 25,
      "description": "This is image 17",
      "image": "",
    },
    {
      "name": "image18",
      "price": 25,
      "description": "This is image 18",
      "image": "",
    },
    {
      "name": "image19",
      "price": 25,
      "description": "This is image 19",
      "image": "",
    },
    {
      "name": "image20",
      "price": 25,
      "description": "This is image 20",
      "image": "",
    },
    {
      "name": "image21",
      "price": 25,
      "description": "This is image 21",
      "image": "",
    },
    {
      "name": "image22",
      "price": 25,
      "description": "This is image 22",
      "image": "",
    },
    {
      "name": "image23",
      "price": 25,
      "description": "This is image 23",
      "image": "",
    },
    {
      "name": "image24",
      "price": 25,
      "description": "This is image 24",
      "image": "",
    },
  ],
  reducers: {},
});

export const getProducts = (pageNumber, countPerPage, category, name) => (
  state
) => {
  // page starting from 0
  const currentPage = pageNumber - 1;
  return state.products.slice(
    currentPage * countPerPage,
    currentPage * countPerPage + countPerPage
  );
};
export const getProductsCount = (state) => state.products.length;

export default productSlice.reducer;
