import { Text, View, StyleSheet } from "react-native";

export const Home = () => {
    return (    
        <>
        <View style={s.meteo_basic}>
            <Text>Meteo Basic</Text>
        </View>
        <View style={s.searchbar_container}>
            <Text>Searchbar</Text>
        </View>
        <View style={s.meteo_advanced}>
            <Text>Meteo Advanced</Text>
        </View>
        </>
    );
};

const s = StyleSheet.create({
    meteo_basic: {
        flex: 2,
    },
    searchbar_container: {
        flex: 2,
    },
    meteo_advanced: {
        flex: 1,
    },
});