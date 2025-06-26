import { Image, ImageStyle, StyleSheet, Text, useColorScheme, View, ViewStyle } from "react-native";
import AddToWishlist from "./AddToWishlist";
import { TMDB_IMAGES_BASE_URL } from "@env";
import RemoveToWishList from "./RemoveToWishlist";
import { Movie } from "../types/Movie";

type MovieCardProps = {
    movie: Movie;
    showTitle: boolean;
    isWishListScreen: boolean;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
};

const getStyles = (isDarkMode: boolean) => StyleSheet.create({
    movieItem: {
        width: 100,
        alignItems: 'center',
        gap: 8,
    },
    image: {
        width: 110,
        height: 165,
        borderRadius: 8,
        overflow: 'hidden',
    },
    text: {
        textAlign: 'center',
        color: isDarkMode ? '#E0E0E0' : '#212121',
    },
    textBold: {
        fontWeight: 'bold',
    },
    wishlist: {
        position: 'absolute',
        right: 2,
        top: 2,
        backgroundColor: 'rgba(102, 102, 102, 0.6)',
        borderRadius: 12,
        padding: 5,
    },
});

const MovieCard = ({ movie, showTitle, isWishListScreen, imageStyle, containerStyle }: MovieCardProps) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const styles = getStyles(isDarkMode);

    return (
        <View style={containerStyle ?? styles.movieItem}>
            <Image
                source={{ uri: `${TMDB_IMAGES_BASE_URL}/w185${movie.poster_path}` }}
                style={imageStyle ?? styles.image}
            />
            {showTitle && (
                <Text style={[styles.text, styles.textBold]} numberOfLines={1}>
                    {movie.title ?? movie.name}
                </Text>
            )}
            {isWishListScreen ? <RemoveToWishList item={movie} /> : <AddToWishlist item={movie} style={styles.wishlist} />}
        </View>
    );
};

export default MovieCard;
