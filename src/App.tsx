import './App.css'
import { useStore } from './store/store'
function App() {

  const chars = useStore((store) => store.characters)
  const deleteChar = useStore((store) => store.deleteCharacter)
  
  const btnStyles = {
    display: 'block',
    padding: '10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer'
  }

  return (
    <main>
      <div style={{ textAlign: 'center' }}>
        <h1>Sustand</h1>
        <code>A Sus-copy of Zustand</code>
      </div>
      <section>

        {
          chars?.map((char) => (
            <div key={char.id}>
              <h2>Name: {char.name}</h2>
              <p>Age: {char.age}</p>
              <p>Gender: {char.gender}</p>
              <p>Rank: {char.rank}</p>
              <p>Affiliation: {char.affiliation}</p>
              <div>Abilities: {char.abilities.map(ability => <span> {ability}</span>)}</div>
              <br />
              <img src={char.image} alt={char.name} width={500} />
              <button style={btnStyles} onClick={() => deleteChar!(char.id)}>Delete {char.name}</button>
            </div>
          ))
        }

        <div>
          Store Structure
          <pre>
            {`
          interface Character {
            id: string;
            name: string;
            age: number;
            gender: string;
            rank: string;
            affiliation: string;
            abilities: string[];
            image?: string
          }
           
          interface Store {
            characters: Character[];
            addCharacter: (character: Character) => void;
            deleteCharacter: (id: string) => void;
            set: (store: Partial<Store>) => void;
          }
              `}
          </pre>
        </div>
      </section>


    </main>
  )
}

export default App

