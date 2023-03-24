import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './ProfilesStyles'

type Props = {}

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen