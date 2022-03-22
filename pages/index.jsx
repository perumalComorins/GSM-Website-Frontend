import { useRouter } from 'next/router';
import HomePage from './home/index'




function Home() {


  const router = useRouter();

// only show nav when logged in
// if (!user) return null;
    return (
      <HomePage/>
    )
}
export default Home;