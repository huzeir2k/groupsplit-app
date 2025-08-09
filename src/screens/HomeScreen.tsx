import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const dummyGroups = [
  { id: '1', name: 'Roommates', membersCount: 3 },
  { id: '2', name: 'Trip to NYC', membersCount: 5 },
];

export default function HomeScreen({ navigation }: Props) {
  const renderGroup = ({ item }: { item: typeof dummyGroups[0] }) => (
    <TouchableOpacity
      style={styles.groupCard}
      onPress={() => navigation.navigate('GroupDetails', { groupId: item.id })}
    >
      <Text style={styles.groupName}>{item.name}</Text>
      <Text style={styles.groupMembers}>{item.membersCount} members</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Button title="Create New Group" onPress={() => navigation.navigate('CreateGroup')} />
      <FlatList
        data={dummyGroups}
        keyExtractor={(item) => item.id}
        renderItem={renderGroup}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  groupCard: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#eee',
    marginBottom: 15,
  },
  groupName: { fontSize: 18, fontWeight: 'bold' },
  groupMembers: { fontSize: 14, color: '#666' },
});
