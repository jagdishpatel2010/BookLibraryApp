import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';
import { BOOKS_DATA } from '../data/booksData';
import BookCard from '../components/BookCard';

export default function ProfileScreen() {
  const { favorites } = useFavorites();
  const favoriteBooks = BOOKS_DATA.filter(book => favorites.includes(book.id));

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.avatar}><Text style={styles.avatarText}>JP</Text></View>
        <Text style={styles.userName}>Jagdish Patel</Text>
        <Text style={styles.userRole}>Member Account</Text>
      </View>

      <Text style={styles.favTitle}>❤️ My Saved Books ({favoriteBooks.length})</Text>
      {favoriteBooks.length === 0 ? (
        <Text style={styles.noFavs}>Your bookmarks collection is currently empty.</Text>
      ) : (
        <FlatList
          data={favoriteBooks}
          renderItem={({ item }) => <BookCard book={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  profileHeader: { alignItems: 'center', padding: 24, backgroundColor: '#FFF', borderBottomWidth: 1, borderColor: '#E5E5E5' },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#E63946', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  userName: { fontSize: 20, fontWeight: 'bold', color: '#1D3557', marginTop: 12 },
  userRole: { fontSize: 14, color: '#666' },
  favTitle: { fontSize: 18, fontWeight: 'bold', color: '#1D3557', margin: 16 },
  noFavs: { textAlign: 'center', color: '#888', marginTop: 20, fontSize: 14 }
});