import { Children } from "react";
import "@/styles/global.css";
import Nav from "@components/Nav";
export const metadata = {
  title:"Promtopia",
  description:"Discover & Share AI Prompts"
}
const RootLoyaut = ({children}) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"/>
        </div>
        <main className="app">
          <Nav/>
          {children}
        </main>
      </body>
    </html>
   
  )
}

export default RootLoyaut