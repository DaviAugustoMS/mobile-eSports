import {
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageSourcePropType,
  Text,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { THEME } from "../../theme";
import { styles } from "./styles";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  banner: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  console.log(data);

  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: data.banner }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
