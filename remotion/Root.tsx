import { Composition } from "remotion";
import { BreezePod3DHero } from "./scenes/BreezePod3DHero";

export const RemotionRoot = () => {
  return (
    <Composition
      id="BreezePod3DHero"
      component={BreezePod3DHero}
      durationInFrames={120}
      fps={30}
      width={1600}
      height={1200}
    />
  );
};
