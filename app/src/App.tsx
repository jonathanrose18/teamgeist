import { useSession } from './lib/auth';

function App() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>App</h1>
      <p>Hi {session.user.name}</p>
    </div>
  );
}

export default App;
