import './global.css'

import MyChakraProvider from "./ChakraProvider"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>

          {children}


      </body>
    </html>
  )
}
