import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchContacts, fetchRadomContact } from '../utility/api';
import ContactListItem from '../Components/ContactListItem';
import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from '../Store';
import { useDispatch, useSelector } from 'react-redux';
import antDesign from 'react-native-vector-icons/MaterialCommunityIcons'
import Profile from './Profile';


const keyExtractor = ({ phone }) => phone;

const Contacts = ({navigation}) => {

    //state
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    //const {contacts, loading, error} = useSelector((state)=>state);
    //const dispatch = useDispatch();
    //Load du lieu
    useEffect(()=>{
        // dispatch(fetchContactsLoading());
        fetchContacts()
        .then(
            c=>{
                console.log(c);
                setContacts(c);
                setLoading(false);
                setError(false);
                // dispatch(fetchContactsSuccess(c));
                
            }
            
        )
        .catch(
            e=>{
                console.log("eror" + e);
                setLoading(false);
                setError(true);
                // dispatch(fetchContactsError(e))
            }
        )
    },[])
    //sort
    const contactsSorted = (contacts.slice().sort((a,b) => a.name.localeCompare(b.name)));
    const renderContact = ({item}) => {
        const { name, avatar, phone } = item;
        return <ContactListItem
            name={name}
            avatar={avatar}
            phone={phone}
            onPress={()=> navigation.navigate('Profile', {contact: item})}
            />;
    };
    //Render
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large"/>}
      {error && <Text>Error...</Text>}
      {!loading && !error && (
        <FlatList
            data={contactsSorted}
            keyExtractor={keyExtractor}
            renderItem={renderContact}
        />
      )}
    </View>
  )
}


export default Contacts;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex:1,
    },
});