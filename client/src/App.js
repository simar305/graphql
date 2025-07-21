import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';


const query = gql`
  query getTodosWithUser{
    getTodos {
      title
      completed
        user{
          id
          name
        }
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(query);

  if (loading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {data.getTodos.map(todo => (
            <tr key={todo.title}>
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
