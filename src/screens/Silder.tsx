import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {getPopularMovies} from '../utils/TMDBService';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';

// Dynamic screen-based dimensions
const screenWidth = Dimensions.get('window').width;
const carouselWidth = screenWidth * 0.9;
const carouselHeight = screenWidth / 3;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    backgroundColor: '#B3E5FC',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    borderWidth: 3,
    borderColor: 'green',
  },
  carouselConteiner: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'yellow',
    padding: 100,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  carousel: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  carouselContentConntainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  caraouselContent: {
    backgroundColor: 'orange',
  },
  carouselPaginator: {
    gap: 10,
    marginTop: 10,
  },
  carouselPaginatorDot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 50,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
});

const Silder = () => {
  const data = [1, 2, 3, 4, 5];
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleOnPressApi = async () => {
    try {
      const movies = await getPopularMovies();
      console.log(movies);
    } catch (error) {
      console.error('TMDB error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>My List</Text>
        <Text>discover</Text>
      </View>
      <View style={styles.content}>
        <Carousel
          style={[styles.carouselConteiner, styles.carousel]}
          ref={ref}
          width={carouselWidth}
          height={carouselHeight}
          data={data}
          onProgressChange={progress}
          renderItem={({index}) => (
            <View style={styles.carouselContentConntainer}>
              <Text style={styles.caraouselContent}>{index}</Text>
            </View>
          )}
        />
        <Pagination.Basic
          progress={progress}
          data={data}
          containerStyle={styles.carouselPaginator}
          dotStyle={styles.carouselPaginatorDot}
          onPress={onPressPagination}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.text}>whislist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.text}>details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleOnPressApi}>
          <Text style={styles.text}>call the api</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Silder;
