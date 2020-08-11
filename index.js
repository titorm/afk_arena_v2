/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Firebase from 'firebase';

import App from './src/App';
import { name as appName } from './app.json';

import firebaseConfig from './src/config/firebaseConfig';

Firebase.initializeApp(firebaseConfig);
AppRegistry.registerComponent(appName, () => App);
