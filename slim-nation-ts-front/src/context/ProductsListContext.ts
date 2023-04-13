import { createContext, useContext } from "react";
import { product } from "../types/types";

export const productListInitState:product[] = []

const productsListData = { productsList:productListInitState, setProductsList:(productsList: product[]) => { } };
export const ProductsListContext = createContext(productsListData);

export const useProductListCont = ()=>useContext(ProductsListContext)