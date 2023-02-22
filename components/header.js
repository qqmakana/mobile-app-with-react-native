import { StyleSheet, Text, View } from 'react-native';


const Header = ()=> {
    return(

        
              <View style={headerStyles.container}>
                <Text    style = {headerStyles.headerText}>
                  Welcome to Makana Boys Resturant
                </Text>
              </View>
    )

}

export default Header

const headerStyles = StyleSheet.create({
    container: { 
        flex: 0.24,
        backgroundColor: '#F4CE14'
    },
    headerText:{ 

        padding: 40,
        fontSize: 30,
        color: 'black'
    }

})
