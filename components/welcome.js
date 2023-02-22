import { 
    ScrollView, StyleSheet,
    Text, Image
    } from 'react-native';



 export default function Welcome (){
    return(
            <ScrollView style = {styles.container}>
               <Image 
               style = {styles.logo}
               source = { require('\Makana\assets\LIttle-Lemon-Logo.png')}
               resizeMode = {'center'}
               accessible = {true}
               accessibilityLabel = {'Little-Lemon-Logo'}
               />
                  
               <Text style = {styles.tittle}>
                  Makana Boys Resturant
               </Text>

               <Image style = {styles.image}
               
               resizeMode = {'repeat'}
               accessible ={true} 
               accessibilityLabel = {'little lemon menu'} />
                  
               

               <Image style = {styles.image}
               resizeMode = {'cover'}
               accessible ={true}
               accessibilityLabel = {'little lemon menu'}  />
                  
               

               <Image style = {styles.image}
               resizeMode = {'cover'}
               accessible ={true}
               accessibilityLabel = {'little lemon menu'} />
                  
               

               <Image style = {styles.image}
               resizeMode = {'cover'}
               accessible ={true}
               accessibilityLabel = {'little lemon menu'} />


               <Image style = {styles.image}
               resizeMode = {'cover'}
               accessible ={true}
               accessibilityLabel = {'little lemon menu'} />
                  
               

            </ScrollView>

    )
}

const styles = StyleSheet.create({

   logo : {
    height: 100,
    width: 300,
    resizeMode: 'contain'
    
   },
   container: {

    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff'
   },

   tittle: {

    marginTop: 16,
    paddingVertical: 10,
    color: 'red'

   },
   image :{
         width: 350,
         height: 250,
         borderRadius: 10

   }



})