import * as React from 'react';
import MapView from 'react-native-maps';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 20,

      }}>Sign In</Text>
      <TextInput 
        placeholder={'  Username'}
        value={username}
        onChangeText={setUsername}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>

      <TextInput 
        placeholder={'  Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>
      
      <Text style={{
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10

      }} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Text>

      <Text style={{
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10

      }} onPress={() => navigation.navigate('RegisterScreen')}>Sign Up</Text>
      
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function Petrol({ navigation }) {
  const [city, setCity] = React.useState('');
  const [district, setDistrict] = React.useState('');
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 20,

      }}>Petrol Avilability</Text>

      <Button
        title="Octane 92"
        onPress={() => Alert.alert('You Selected Octane 92')}
        style={{marginBottom: 10}}
      />
      <Text></Text>
      <Button
        title="Octane 95"
        onPress={() => Alert.alert('You Selected Octane 95')}
      />


      <TextInput 
        placeholder={'  City'}
        value={city}
        onChangeText={setCity}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>

      <TextInput 
        placeholder={'  District'}
        value={district}
        onChangeText={setDistrict}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>
      
     

      
      <Button
        title="Get Notified !"
        onPress={() => Alert.alert('Alert! Galawilawatta Filling Station ')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text style={{
        fontSize: 36,
        marginBottom: 10,
        marginTop: 10

      }}>  Fuel</Text>


      <View style={{
        flex: 0,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'

      }}>
        <Button
        title="Petrol"
        onPress={() => navigation.navigate('Petrol')}
        />
        

      </View>

      <View style={{
        flex: 0,
        width: 100,
        top: -35,
        left: 80,
        alignItems: 'center',
        justifyContent: 'center'

      }}>
        <Button
        title="Diesel"
        onPress={() => navigation.navigate('Details')}
        />

      </View>

      <View style={{
        flex: 0,
        width: 100,
        top: -70,
        left: 160,
        alignItems: 'center',
        justifyContent: 'center'

      }}>
        <Button
        title="Kerosine"
        onPress={() => navigation.navigate('Details')}
        />

      </View>


      <View style={{
        flex: 0,
        width: 100,
        top: -105,
        left: 250,
        alignItems: 'center',
        justifyContent: 'center'

      }}>
        <Button
        title="LP Gas"
        onPress={() => navigation.navigate('Details')}
        />

      </View>

      <Text style={{
        fontSize: 36,
        marginBottom: 40,
        marginTop: -50

      }}>  Queue Map</Text>
      <View style={{
        flex: 1,
        top: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'}}>
      <MapView style={{ width: 350,
    height: 300,
    top: 90,}} />
      </View>
      
        <View style={{
          width: 350,
          height: 70,
          top: 300,
          left: 20,
          backgroundColor: '#42a7b8',
          marginBottom: 40,
          marginTop: 0,
        }}>

          <Text>Homagama Filling Station loaded 13000l Petrol Tank</Text>

        </View>

        <View style={{
          width: 350,
          height: 70,
          top: 300,
          left: 20,
          backgroundColor: '#42a7b8',
          marginBottom: 40,
          marginTop: 0,
        }}>

          <Text>Homagama Filling Station loaded 13000l Petrol Tank</Text>

        </View>
      
     

      
    </View>
  );
}


function ForgotPassword({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 20,

      }}>Enter Email Address</Text>
      <TextInput 
        placeholder={'  email'}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>

      <Button
        title="Reset Password"
        onPress={() => navigation.navigate('Details')}
      />
      
    </View>
  );
}



function RegisterScreen({navigation}) {
  const [email, setemail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{
        fontSize: 20,

      }}>Sign Up</Text>
      <TextInput 
        placeholder={'  email'}
        value={email}
        onChangeText={setemail}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>

      <TextInput 
        placeholder={'  Username'}
        value={username}
        onChangeText={setUsername}
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>

      <TextInput 
        placeholder={'  Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>
       <TextInput 
        placeholder={'  Re enter Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
        width: 240,
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10
      }}></TextInput>
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Details')}
      />
      
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Sign In" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Petrol" component={Petrol} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
