
import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './action';

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer);
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name))
    }

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])

    return (
        < View style={{ alignItems: 'center', borderBottomColor: '#cd5c5c', borderBottomWidth: 2, padding: 15, marginBottom: 50 }}>

            <Text style={{ fontSize: 28, color: 'purple', margin: 15 }}>{item.name}</Text>
            <Text style={{ fontSize: 24, color: 'green', margin: 2 }}>{item.price}</Text>
            <Text style={{ fontSize: 24, color: 'green' }}>{item.color}</Text>

            <Image style={{ width: 150, height: 150 }} source={{ uri: item.image }} />

            {
                isAdded ?
                    <Button title='Remove to Cart' onPress={() => handleRemoveFromCart(item)} />
                    :
                    <Button title='Add to Cart' onPress={() => handleAddToCart(item)} />
            }


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Product;