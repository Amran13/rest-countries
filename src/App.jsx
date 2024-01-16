import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'

function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <div className='mt-12'>
        {
          navigation.state === 'loading' ? <span className="loading loading-spinner loading-lg"></span>
          : <Outlet></Outlet>
        }
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
