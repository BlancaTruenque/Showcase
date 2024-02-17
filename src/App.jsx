import Footer from "./components/Footer"
import Header from "./components/Header"
import MainApp from "./components/MainApp"
import AppStateProvider from "./context/AppStateProvider"

function App() {
  return (
    <>
      <AppStateProvider>
        <div className="flex flex-col min-h-screen font-nunito">
          <Header />
          <MainApp />
          <Footer />
        </div>
      </AppStateProvider>
    </>

  )
}

export default App
