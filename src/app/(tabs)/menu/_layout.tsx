import { Stack } from "expo-router";

const MenuStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Custom" }} />
    </Stack>
  );
};

export default MenuStack;
