import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Menu from './components/menu';
import FeedBackForm from './components/feedbackForm';




export default function App() {
  return (
    <View style={styles.container}>
      
      
      <FeedBackForm/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
