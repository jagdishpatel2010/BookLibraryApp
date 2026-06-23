import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { BOOKS_DATA } from '../data/booksData';
import BookCard from '../components/BookCard';

export default function HomeScreen() {
  const topRated = BOOKS_DATA.filter(b => b.rating >= 4.7).sort((a, b) => b.rating - a.rating);
  const recentlyAdded = BOOKS_DATA.filter(b => b.isRecentlyAdded);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerHero}>
        <Text style={styles.welcomeText}>Welcome to NAAI Library</Text>
        <Text style={styles.subText}>Discover smart knowledge paths today</Text>
      </View>

      <Text style={styles.sectionTitle}>⭐ Top Rated Books</Text>
      <FlatList
        data={topRated}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={false}
      />

      <Text style={styles.sectionTitle}>⏰ Recently Added</Text>
      <FlatList
        data={recentlyAdded}
        renderItem={({ item }) => <BookCard book={item} />}
        keyExtractor={item => item.id}
        horizontal={false}
        scrollEnabled={false}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerHero: { backgroundColor: '#1D3557', padding: 24, borderBottomLeftRadius: 16, borderBottomRightRadius: 16, marginBottom: 16 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', color: '#FFF' },
  subText: { fontSize: 14, color: '#A8DADC', marginTop: 4 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1D3557', marginHorizontal: 16, marginTop: 16, marginBottom: 8 }
});