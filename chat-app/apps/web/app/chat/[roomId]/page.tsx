'use client'
import { Button } from "@repo/ui/button"
import TextInput from "@repo/ui/textInput"

const page = () => {
    return (
        <section className="" style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="" style={{ width: "40%", height: "80%", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "gray", flexDirection: "column" }}>
                <div className="" style={{ height: "90%", width: "100%", overflowY: 'scroll' }}>
                    <h1 style={{ textAlign: 'center' }}>QUICK CHAT APP</h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", height: "10%", width: "100%", justifyContent: "space-evenly", flexDirection: 'column' }}>
                    <TextInput size="large" placeholder="Enter your message" onChangeFn={() => {
                        alert('Hello chat app!')
                    }} />
                    <Button onButtonClick={() => alert("HI")} bgColor="blue" textColor="white">Send Message</Button>
                </div>
            </div>
        </section >
    )
}

export default page