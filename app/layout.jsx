import MyChakraProvider from "./ChakraProvider"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <MyChakraProvider>
          {children}
        </MyChakraProvider>

      </body>
    </html>
  )
}
