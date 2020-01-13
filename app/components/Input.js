import React from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';

const Input = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  onSubmitEditing,
}) => {
  const {inputStyle, btnStyle, containerStyle, btnTxtStyle} = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={btnStyle}
        onPress={onSubmitEditing}>
        <Text style={btnTxtStyle}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#007aff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  containerStyle: {
    backgroundColor: 'white',
  },
  btnStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#007aff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 10,
  },
  btnTxtStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export {Input};
