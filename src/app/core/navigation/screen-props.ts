import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type UserDetailScreenProps = { 'user-detail': { userId: number } };

export type NavigationUserDetailProps = NativeStackNavigationProp<UserDetailScreenProps, 'user-detail'>;

export type RouteUserDetailProps = RouteProp<UserDetailScreenProps, 'user-detail'>;
