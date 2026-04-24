import { Outlet } from "react-router-dom"
import Header from "./header/Header"

const Container = () => {
  return (
    <section>
      <Header />
      <main className="relative h-dvh overflow-scroll pt-20  w-full">
        <Outlet />
      </main>
    </section>
  )
}

export default Container