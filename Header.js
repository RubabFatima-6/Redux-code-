
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

    const cartData = useSelector((state) => state.reducer)

    const [cartItems, setCartItems] = useState(0)
    console.warn(cartData);
    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])

    return (
        < View >
            <Text style={{
                fontSize: 20, textAlign: 'right', color: 'black',
                padding: 20, backgroundColor: '#e9967a'
            }}>
                <View style={{ backgroundColor: '#dc143c', height: 35, width: 35, borderRadius: 15 }}>
                    <Text style={{fontSize:25,textAlign:'center',color:'black'}}>{cartItems}</Text>
                </View>
            </Text>
        </View>
    );
};

export default Header;