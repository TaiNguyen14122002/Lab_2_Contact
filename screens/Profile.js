import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { fetchRadomContact } from '../utility/api';
import Thumbnail from '../Components/ContactThumbnail';
import DetailListItem from '../Components/DetailListItem';
import colors from '../utility/colors';
import antDesign from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar  } from 'react-native-elements'; // Correct import statement

const Profile = ({navigation, route}) => {

    
    const [contactt, setContact] = useState({});
    
    useEffect(()=>
        {
            
            fetchRadomContact().then(
                (data) => contactt(data)
            )
        },[]);
        
    const {contact} = route.params;
    const {avatar, name, email, phone, cell, picture} = contact;
    // console.log("tai" + contact)
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
            <Image
                style={styles.avatar}
                source={{ uri: avatar }}
                
                
            />
            
            <View style={styles.details}>
                
                <Text style={[styles.title]}>{name}</Text>
                <Text style={[styles.subtitle]}>{phone}</Text>
            </View>
      </View>
      <View style={styles.detailsSection}>
      
            
            <DetailListItem icon="mail" title="Email" subtitle={email} />
            <DetailListItem icon="phone" title="Work" subtitle={phone} />
            <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    avatarSection: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    detailsSection: {
        flex: 1,
        backgroundColor: 'white',
    },
    details: {
        justifyContent:'center',
        marginTop: 30,
    },
    
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,

    },
    subtitle: {
        color: colors.black,
        fontSize: 15,
        marginTop: 4,
        alignItems: 'center',
        
    },
    avatar: {
        
        borderRadius: 80,
        borderColor: 'white',
        borderWidth:1,
        width: 120,
        height: 120,
    },
})