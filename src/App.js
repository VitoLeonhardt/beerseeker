import React, { useEffect, useState } from 'react';
import { Table } from "semantic-ui-react";
import logo from './logo.svg';
import './App.css';

import { Beer } from "./Beer.js";
import { getBeers } from "./utils.js";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // this function is because useEffect's function cannot be async by itself.
    const init = async () => {
      const response = await getBeers();
      console.log(beers);
      setBeers(response);
    };
    if(beers.length === 0) {
      init();
    }
  }, [beers])
  return (
    <div>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Picture</Table.HeaderCell>
        <Table.HeaderCell>Brew date</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {beers.map((beer) => <Beer beer={beer}/>)}
    </Table.Body>
    </Table>

    </div>
  );
}

export default App;
