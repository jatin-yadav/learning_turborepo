'use client'

import { Button } from "@repo/ui/button";
import TextInput from "@repo/ui/textInput";
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <section style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <div>
        <TextInput size="large" placeholder="Enter your room ID" onChangeFn={() => {
          alert('Hello from your web app!')
        }} />
        <br />
        <Button onButtonClick={() => redirect('/chat/123')}>Join Room</Button>
      </div>
    </section>
  );
}
