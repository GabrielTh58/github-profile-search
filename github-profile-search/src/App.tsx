
import { UserProfile } from "./components/UserProfile/UserProfile"
import { SearchInput } from "./components/UserSearchForm"
import { Header } from './components/Header'
import { BackgroundDecorations } from "./components/BackgroundDecorations"

function App() {
  return (
    <>
        <BackgroundDecorations />

        <section className="w-full h-full sm:h-auto sm:w-4/5 min-h-[537px] flex flex-col items-center bg-black py-10 px-4 z-10">
          <div className="w-full flex flex-col items-center justify-center mb-8 md:mb-10">
            <Header />

            <SearchInput />
          </div>

          <UserProfile />
        </section>
    </>
  )
}

export default App
