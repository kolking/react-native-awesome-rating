import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Rating } from '@kolking/react-native-rating';

const App = () => {
  const [rating, setRating] = useState(3.5);
  const [liveRating, setLiveRating] = useState(0);

  const handleChange = useCallback(
    (value: number) => {
      setRating(Math.round((rating + value) * 5) / 10);
      setLiveRating(0);
    },
    [rating],
  );

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Rating
        size={40}
        rating={rating}
        style={styles.rating}
        onMove={setLiveRating}
        onChange={handleChange}
      />
      <Rating
        size={40}
        variant="stars-outline"
        rating={rating}
        style={styles.rating}
        onMove={setLiveRating}
        onChange={handleChange}
      />
      <Rating
        size={40}
        variant="hearts"
        rating={rating}
        style={styles.rating}
        onMove={setLiveRating}
        onChange={handleChange}
      />
      <Rating
        size={40}
        variant="hearts-outline"
        rating={rating}
        style={styles.rating}
        onMove={setLiveRating}
        onChange={handleChange}
      />
      <Rating
        size={40}
        variant="emoji"
        rating={rating}
        style={styles.rating}
        onMove={setLiveRating}
        onChange={handleChange}
      />
      <Text style={styles.text}>Rated {liveRating || rating} out of 5</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    marginTop: 20,
  },
  rating: {
    marginVertical: 10,
  },
});

export default App;
