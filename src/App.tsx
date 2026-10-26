import { useState } from 'react'
import { Button } from '@heroui/react'

// Placeholder screen. Replace everything here with your own design.
export function App() {
  const [presses, setPresses] = useState(0)

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Moderation tool</h1>
      <p className="text-muted">The project runs. Start in src/App.tsx.</p>
      <Button onPress={() => setPresses(presses + 1)}>
        {presses === 0 ? 'HeroUI works, press me' : `Pressed ${presses} times`}
      </Button>
    </main>
  )
}
