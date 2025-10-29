// components/CardList.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TextInput } from 'react-native';
import CardItem from './CardItem';
import cards from '../data/cards.json';

export function CardList() {
  const [search, setSearch] = useState('');

  // Filtre simple
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.description.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      {/* Search bar*/}
      <TextInput
        style={styles.search}
        placeholder="Rechercher une card..."
        value={search}
        onChangeText={setSearch}
      />
      
      {/* Liste filtré */}
      <FlatList
        data={filteredCards}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  search: {
    margin: 16,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 32,
  },
});