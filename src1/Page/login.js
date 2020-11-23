import React, {Component} from 'react';

import {
  StyleSheet,
  AsyncStorage,
  TextInput,
  View,
  Alert,
  Image,
  Button,
  Text,
  Keyboard,
} from 'react-native';

export default class first extends Component {
  // Setting up Login Activity title.
  static navigationOptions = {
    title: 'LoginActivity',
  };

  constructor(props) {
    super(props);

    this.state = {
      UserEmail: '7174021511140001',
      UserPassword: '12345',
    };
  }

  UserLoginFunction = () => {
    this.props.navigation.navigate('MenuUtama');
    // const data = new FormData();
    //   data.append('nik', this.state.UserEmail);
    //   data.append('password', this.state.UserPassword);
    //   fetch('http://pontolo-kwandang.istudios.id/web/login/mproses', {
    //     method: 'post',
    //     headers: {
    //       'Content-Type': 'multipart/form-data;'
    //     },
    //     body: data
    //   })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     if (res.error) {
    //       alert(res.error)
    //     } else {
    //       AsyncStorage.setItem('jwt', res.token)
    //       alert(`Login Berhasil`)
    //       Keyboard.dismiss()
    //       this.props.navigation.navigate("MenuUtama")
    //     }
    //   })
  };

  //   const data = new FormData();
  //   data.append('nik', this.state.UserEmail);
  //   data.append('password', this.state.UserPassword);
  //   fetch('http://ponggok.desapintar.co.id/login/mproses', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'multipart/form-data;'
  //     },
  //     body: data
  //   })
  //  .then((response) => response)
  //        .then((response) => {

  //         if(response === "login_berhasil")
  //          {
  //              // this.props.navigation.navigate("iden", { nominal: this.state.nominal }));
  //           //    this.props.navigation.navigate("MenuUtama", { UserEmail: this.state.UserEmail });
  //           //    Alert.alert("Login Berhasil", "Selamat Datang "+UserEmail);

  //          }
  //          else{
  //           this.props.navigation.navigate("MenuUtama");

  //           Alert.alert("Login Berhasil", "Selamat Datang ");
  //          }

  //        }).catch((error) => {
  //          console.error(error);
  //        });
  //       }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={require('../ass3t/dp/logo-desa-pintar.png')}
          style={{
            height: 80,
            width: 250,
            alignSelf: 'center',
            marginTop: 150,
            marginBottom: 20,
          }}
        />

        <TextInput
          placeholder="Masukkan NIK"
          onChangeText={(UserEmail) => this.setState({UserEmail})}
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          style={styles.TextInputStyleClass}
          value={this.state.UserEmail}
        />

        <TextInput
          placeholder="Masukkan Password"
          onChangeText={(UserPassword) => this.setState({UserPassword})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          value={this.state.UserPassword}
        />

        <Button
          title=" Login"
          onPress={this.UserLoginFunction}
          color="#2ab7c8"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    margin: 10,
    // backgroundColor:'white'
  },

  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    // Set border Hex Color Code Here.
    borderColor: '#2ab7c8',

    // Set border Radius.
    borderRadius: 5,
  },

  TextComponentStyle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    marginBottom: 15,
  },
});
