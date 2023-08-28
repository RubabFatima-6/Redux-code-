
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Components/Redux/Header';
import Product from './Components/Redux/Product';

const App = () => {


    const products = [
        {
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            name: 'Apple Iphone',
            color: 'white',
            price: 150000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        }, {
            name: 'Nokia Mobile',
            color: 'white',
            price: 20000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
    ]

    return (
        < View style={styles.container}>
            <Header />
            <ScrollView>
                {
                    products.map((item) => <Product item={item} />)
                }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App;