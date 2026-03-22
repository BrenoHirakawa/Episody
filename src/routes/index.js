import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  //identifica se foi logado corretamente ou não!
  const { signed, loading } = useContext(AuthContext);
  // const signed = true;

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#0B0B0F',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#7B2CBF" />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
