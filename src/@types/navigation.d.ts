export interface GameProps {
  id: string;
  title: string;
  banner: string;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: GameProps;
    }
  }
}
