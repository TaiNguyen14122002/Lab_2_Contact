import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons'


const ContactThumbnail = ({name, phone, avatar, textcolor, onPress}) => {

    const colorstyle = {
        color: textcolor,
    };
    const ImageComponent = onPress ? TouchableOpacity : View;


  return (
    <View style={styles.container}>
        <ImageComponent onPress={onPress}>
            <Image
                source={{
                    uri:avatar,
                }}
                style={styles.avatar}
            />
        </ImageComponent>
        {name !== '' && <Text style={[styles.name, colorstyle]}>{name}</Text>}

        {phone !== '' && (
            <View style={styles.phoneSection}>
                <Icon name="phone" size={16} style={{color:textcolor}}/>
                <Text style={[styles.phone, colorstyle]}>{phone}</Text>
            </View>
        )}
    </View>
  )
}
ContactThumbnail.prototype = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
}

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textcolor: '',
    onPress: null,
}
export default ContactThumbnail;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width:90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 45,
        fontWeight: 'bold',
    },
    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
        justifyContent:'center',
    },
    phone: {
        marginLeft:4,
        fontSize: 16,
        fontWeight: 'bold',
    },
})