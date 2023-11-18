import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import { fetchContacts, fetchRadomContact } from '../../../utility/api';
import ContactThumbnail from '../../../Components/ContactThumbnail';
import { useDispatch, useSelector } from 'react-redux';


const keyExtractor = ({phone}) => phone;
const Favorites = ({navigation}) => {

    //state
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const {contacts, loading, error} = useSelector((state)=>state);

    //load du lieu
    useEffect(()=>
    fetchContacts()
    .then(
        c => {
            setContacts(c);
            setLoading(false);
            setError(false);
        }
    ).catch(
        ex => {
            setLoading(false);
            setError(true);
        }
    )
    ,[])

    const renderFavoriteThumbnail = ({item}) => {
        const { avatar} = item;
        return (
            <ContactThumbnail
            avatar={avatar}
            onPress={() => navigation.navigate('Profile', {contact: item})}
            />
        
        );
    };
    const favorite = contacts.filter(contact => contact.favorite);
  
    return (
    <View style={styles.container}>
        {loading && <ActivityIndicator size="large"/>}
        {error && <Text>Error...</Text>}
        {!loading && !error && (
            <FlatList
                data={favorite}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={renderFavoriteThumbnail}
                />
        )}
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent:'center',
        flex: 1,},
        list:{
            alignItems:'center',
        },
});
export default Favorites