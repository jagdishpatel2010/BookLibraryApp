import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { BOOKS_DATA, CATEGORIES } from '../data/booksData';
import BookCard from '../components/BookCard';

export default function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBooks = selectedCategory === 'All' 
    ? BOOKS_DATA 
    : BOOKS_DATA.filter(book => book.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <FlatList
          data={CATEGORIES}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.chip, selectedCategory === item && styles.activeChip]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text style={[styles.chipText, selectedCategory === item && styles.activeChipText]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.chipContainer}
        />
      </View>

      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  filterWrapper: { backgroundColor: '#FFF', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#E5E5E5' },
  chipContainer: { paddingHorizontal: 12 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: '#F1FAEE', marginRight: 8, borderWidth: 1, borderColor: '#A8DADC' },
  activeChip: { backgroundColor: '#E63946', borderColor: '#E63946' },
  chipText: { color: '#457B9D', fontWeight: '600' },
  activeChipText: { color: '#FFF' }
});