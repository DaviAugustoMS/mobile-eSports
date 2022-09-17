import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, TouchableOpacity, Image, FlatList, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { THEME } from "../../theme";

import { Heading } from "../../components/Heading";
import { GameProps } from "../../@types/navigation";
import { Background } from "../../components/Background";
import { DuoCard } from "../../components/DuoCard";

export interface GameAdsProps {
  hourEnd: string;
  hourStart: string;
  name: string;
  id: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function Game() {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const game = params as GameProps;

  const [gameAds, setGameAds] = useState<GameAdsProps[]>([]);

  function handleGoBack() {
    goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.15.140:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => setGameAds(data));
  }, []);

  console.log(gameAds);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.banner }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />
        <FlatList
          contentContainerStyle={[
            gameAds.length <= 1 ? styles.emptyListContent : styles.contentList,
          ]}
          data={gameAds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard onConnect={() => {}} data={item} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Não há aníncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
