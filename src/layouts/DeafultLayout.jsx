import Header from '../section/Header'
import Main from '../section/Main'
import { useGlobalContext } from '../context/GlobalContext';
import Loader from '../components/Loader'

export default function DefaultLayout() {

  const {isLoading} = useGlobalContext();
  return (
    <>
      <Header />
      <Main />
      { isLoading && <Loader /> }
    </>
  )
}