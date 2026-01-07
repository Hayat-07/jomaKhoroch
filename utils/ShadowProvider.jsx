import { View, Platform } from "react-native";

const ShadowProvider = ({
  children,
  color = "#000",
  elevation = 8,
  radius = 8,
  offset = 4,
  opacity = 0.3,
  style,
}) => {
  const shadowStyle = {
    backgroundColor: "#fff", // 🔥 REQUIRED for Android
    borderRadius: radius,

    ...(Platform.OS === "ios"
      ? {
          shadowColor: color,
          shadowOffset: { width: offset, height: offset },
          shadowOpacity: opacity,
          shadowRadius: radius,
        }
      : {
          elevation,
        }),
  };

  return <View style={[shadowStyle, style]}>{children}</View>;
};

export default ShadowProvider;
