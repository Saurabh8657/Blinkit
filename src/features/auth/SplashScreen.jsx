import { View, Text, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Colors } from '../../utils/Constants'
import { screenHeight } from '../../utils/Scalling'
import GeoLocation from '@react-native-community/geolocation'
import logo from '../../assets/images/splash_logo.jpeg'
import Geolocation from '@react-native-community/geolocation'


GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto'
})


const SplashScreen = () => {

  useEffect( () => {
    const fetchUserLocation = async () => {
      try {
        Geolocation.requestAuthorization()
      } catch (error) {
        Alert.alert('Allow location service to get better Shopping Experience')
      }
    }
    const timeout = setTimeout(fetchUserLocation, 1000)
    return () => clearTimeout(timeout)
  }, [])


  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.logoImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: screenHeight * 0.3,
    height: screenHeight * 0.3,
  }
})

export default SplashScreen