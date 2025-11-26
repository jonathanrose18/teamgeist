import './index.css';

import { useQuery } from '@tanstack/react-query';

function App() {
  const {
    isPending,
    error,
    data: club,
  } = useQuery({
    queryKey: ['club'],
    queryFn: () => fetch('/api/club').then(res => res.json()),
  });

  if (isPending) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  if (!club) return <div>Klub nicht initialisiert</div>;

  return <pre>{JSON.stringify(club, null, 2)}</pre>;
}
export default App;
