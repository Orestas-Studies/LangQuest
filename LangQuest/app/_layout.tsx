import '../global.css';

import { Stack } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo'


const myApiKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!myApiKey) {
  throw new Error ('EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY is not defined')
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={myApiKey}>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="gameScreen" options={{ headerShown: true }} />
      <Stack.Screen name="profileScreen" options={{ headerShown: false }} />
    </Stack>
    </ClerkProvider>
  );
}
