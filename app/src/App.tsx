import { useSession } from '@/lib/auth';

import './index.css';

function App() {
  const { data: session } = useSession();

  console.log(session);

  return null;
}

export default App;
