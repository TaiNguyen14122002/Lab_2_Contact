import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContactThumbnail from '../../../Components/ContactThumbnail';
import DetailListItem from '../../../Components/DetailListItem';

const Profile = ({router}) => {

    const {contact} = router.params;
    const { avatar, name, email, phone, cell } = contact;
  return (
    <View style={styles.container}>
        <View style={styles.avatarSection}>
            <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        </View>
        <View style={styles.detailSection}>
            <DetailListItem icon="mail" title="Email" subtitle={email} />
            <DetailListItem icon="phone" title="Work" subtitle={phone} />
            <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
    </View>
  )
}

export default Profile

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
})