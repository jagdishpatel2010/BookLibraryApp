import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BOOKS_DATA } from '../data/booksData';
import BookCard from '../components/BookCard';

export default function BooksScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = BOOKS_DATA.filter(book =>
    book.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#457B9D" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search by title or author..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          clearButtonMode="while-editing"
        />
      </View>

      {filteredBooks.length === 0 ? (
        <Text style={styles.emptyText}>No books match your criteria.</Text>
      ) : (
        <FlatList
          data={filteredBooks}
          renderItem={({ item }) => <BookCard book={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  searchBox: { flexDirection: 'row', backgroundColor: '#FFF', margin: 16, borderRadius: 8, alignItems: 'center', paddingHorizontal: 12, borderWidth: 1, borderColor: '#E5E5E5' },
  searchIcon: { marginRight: 8 },
  input: { flex: 1, height: 44, color: '#1D3557' },
  emptyText: { textAlign: 'center', marginTop: 40, color: '#666', fontSize: 16 }
});