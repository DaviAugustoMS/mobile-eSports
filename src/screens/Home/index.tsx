import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

import { styles } from "./styles";

export function Home() {
  const { navigate } = useNavigation();
  const [games, setGames] = useState<GameCardProps[]>([]);

  function handleGames(item: GameCardProps) {
    navigate("game", {
      id: item.id,
      title: item.title,
      banner: item.banner,
    });
  }

  useEffect(() => {
    fetch("http://192.168.15.140:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleGames(item)} data={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
