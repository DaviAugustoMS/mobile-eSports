import { View, TouchableOpacity, Text } from "react-native";
import { DuoInfo } from "../DuoInfo";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { GameAdsProps } from "../../screens/Game";

import { GameController } from "phosphor-react-native";

interface DuoCardProps {
  data: GameAdsProps;
  onConnect: () => void;
}
export function DuoCard({ data, onConnect }: DuoCardProps) {
  console.log(data);

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de jogo" value={`${data.yearsPlaying} ano(s)`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays?.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController size={20} color={THEME.COLORS.TEXT} />
        <Text style={styles.textButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
