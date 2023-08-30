import React, { useState } from 'react';
import { View, Alert, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ( {navigation} ) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'username' && password === 'password') {
            Alert.alert('Login successful.');
            navigation.navigate('Home');
        } else {
            Alert.alert('Login failed.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Together Light Inc</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(text) => setusername(text)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        marginBottom: 50,
    },
    inputView: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
        color: '#333',
    },
    loginButton: {
        width: '80%',
        backgroundColor: '#333',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    loginText: {
        color: '#fff',
    },
    forgotPasswordText: {
        color: '#333',
        marginTop: 15,
    },
});

export default LoginScreen;
