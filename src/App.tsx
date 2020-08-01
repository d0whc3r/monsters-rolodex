import React, { ChangeEvent } from 'react';
import './App.scss';
import { CardList } from './components/card-list/card-list.component';
import { Monster } from './types/monster';
import { SearchBox } from './components/search-box/search-box.component';

interface MonsterState {
  monsters: Monster[];
  searchField: string;
}

class App extends React.Component<Record<string, unknown>, MonsterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((response: Monster[]) => this.setState({ monsters: response }));
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name }) => name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div className="App">
          <h1 className="title">Monsters Rolodex</h1>
          <SearchBox
              placeholder="search monsters"
              handleChange={(e) => this.handleChange(e)}
          />
          <CardList monsters={filteredMonsters} />
        </div>
    );
  }
}

export default App;
