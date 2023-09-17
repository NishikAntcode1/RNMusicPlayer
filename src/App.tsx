import { View, Text, StyleSheet, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { addTrack, setUpPlayer } from '../musicPlayerService'
import MusicPlayer from './screens/MusicPlayer'

const App = () => {

  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setUp() {
    let isSetUp = await setUpPlayer()

    if(isSetUp){
      await addTrack()
    }

    setIsPlayerReady(isSetUp)
  }

  useEffect(() => {
  
    setUp()
    
  }, [])

  if(!isPlayerReady) {
    <SafeAreaView>
      <ActivityIndicator />
    </SafeAreaView>
  }
  

  return (
    <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <MusicPlayer />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App