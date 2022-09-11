import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { getProducts } from "../services/product";
import Product from "../components/Product";

export default function ProductList(){
    function renderProduct({item: product}){
        return (
            <Product 
                {...product}
                onPress={ () => {
                        navigation.navigate('ProductDetails', {productId: product.id})
                    }
                }
            />
        )
    }

    const [stateProducts, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })
    
    return (
        <FlatList 
            style = {styles.productsList}
            contentContainerStyle = {styles.productsListContainer}
            keyExtractor = {(item) => item.id.toString()}
            data = {stateProducts}
            renderItem = {renderProduct}
        />
    )


}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 8,
      marginHorizontal: 8,
    },
  });