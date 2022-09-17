import { THEME } from "./../../theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 210,

    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 20,
    marginRight: 16,
  },
  button: {
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 31,
    backgroundColor: THEME.COLORS.PRIMARY,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  textButton: {
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
  },
});
