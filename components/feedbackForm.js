import React, { useState } from 'react';

import { 
    ScrollView, StyleSheet,
    Text,TextInput,
    KeyboardAvoidingView 
   } from 'react-native';

import { Platform } from 'react-native';


export default function FeedBackForm () {

    const [firstName, onChangeFirstName] = useState('')
    const [lastName, onChangeLastName] = useState('')
    const [message, onChangeMessage] = useState('')
    const [phoneNumber, onChangePhoneNumber] = useState('')

return (

<KeyboardAvoidingView  behavior = {Platform.OS === 'ios' ? 'padding' : 'height' }>
    <ScrollView  style = {styles.container}

    >


    <Text  style = {styles.headingSection}> How was your visit at Makana Boys Resturant  </Text>

    <Text  style = {styles.infoSection}  >

        Makana Boys is a charming neighborhood bistro that serves simple food 
        and classic cocktails in a lively but casual environment. We would love 
        to hear your experience with us

    </Text>

    <TextInput 
    style = {styles.input}
    value = {firstName}
    onChangeText = {onChangeFirstName} 
    placeholder = {firstName}
    clearButtonMode = {'always'}
    />

    <TextInput 
    style = {styles.input}
    value = {lastName}
    onChangeText ={onChangeLastName}
    placeholder = {lastName}
    clearButtonMode ={'always'} 

    />

    <TextInput 
    style = {styles.input}
    value = {message}
    onChangeText = {onChangeMessage} 
    placeholder = {message}
    clearButtonMode ={'always'}
     />

    <TextInput 
    style = {styles.input}
    value = {phoneNumber}
    onChangeText ={onChangePhoneNumber} 
    placeholder = { phoneNumber}
    clearButtonMode ={'always'}
     />

    </ScrollView>
</KeyboardAvoidingView>
)

}




const styles = StyleSheet.create({ 
     container: { 
      flex: 1, 
     }, 
     input: { 
     height: 40, 
     margin: 12, 
     borderWidth: 1, 
     padding: 10, 
     fontSize: 16, 
     borderColor: 'EDEFEE', 
     backgroundColor: '#F4CE14', 
     }, 
     messageInput: { 
     height: 100, 
     margin: 12, 
     borderWidth: 1, 
     padding: 10, 
     fontSize: 16, 
     backgroundColor: '#F4CE14', 
     }, 
     infoSection: { 
     fontSize: 24, 
     padding: 20, 
     marginVertical: 8, 
     color: '#EDEFEE', 
     textAlign: 'center', 
     backgroundColor: '#495E57', 
     }, 
     headingSection: { 
     fontSize: 28, 
     padding: 20, 
     marginVertical: 8, 
     color: '#EDEFEE', 
     textAlign: 'center', 
     backgroundColor: '#495E57', 
     }, 
    }); 