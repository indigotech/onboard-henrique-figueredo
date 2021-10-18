import React from 'react';

import { ActivityIndicator, Text } from 'react-native';

import { StyleLoadingContainer } from './loading.component.style';

export const AtomLoading: React.FC = () => {
  return (
    <StyleLoadingContainer>
      <Text>
        <ActivityIndicator color="#fff" />;
      </Text>
    </StyleLoadingContainer>
  );
};
