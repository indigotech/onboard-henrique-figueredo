import React from 'react';

import { useLinkTo } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useTheme } from 'styled-components';

export const PlusFab = () => {
  const linkTo = useLinkTo();
  const theme = useTheme();
  const fabStyle = StyleSheet.create({
    fab: {
      position: 'absolute',
      marginBottom: 40,
      right: 0,
      bottom: 0,
    },
  });

  return (
    <FAB
      style={fabStyle.fab}
      small
      icon="plus"
      onPress={() => linkTo('/add-user')}
      color={theme.font.colors.callToAction}
    />
  );
};
