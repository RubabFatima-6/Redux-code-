
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserList } from './action';


const UserList = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.reducer)

    useEffect(() => {
        dispatch(getUserList())
    }, [])
    console.warn("in component", userList);

    return (
        < View style={styles.container} >
           {
            userList.length?
            userList.map((item)=>(<Text style={{fontSize:20}}>{item.firstName}</Text>))
            :null
           }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default UserList;