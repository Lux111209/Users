import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

const Buttons = ({text, action}) => {
  return ( 
    <TouchableOpacity onPress={action}>
      <Text>
        {text}
      </Text>
    </TouchableOpacity>
   );
}
 
export default Buttons;