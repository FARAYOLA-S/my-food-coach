import Login from "../../component/Login";
import Signup from "../../component/Signup";


export default function Home({user}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      { user? <Login /> : <Signup />}
      
    </main>
  )
}
