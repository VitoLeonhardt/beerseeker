import React, { useEffect, useState } from 'react';
import { Table, Image, Pagination, Input } from "semantic-ui-react";
import logo from "./beerseker.jpg";
import './App.css';

import { Beer } from "./Beer.js";
import { getBeers } from "./utils.js";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState(null);
  const [brewDate, setBrewDate] = useState(null);
  const [searchParams, setSearchParams] = useState({});

  useEffect(() => {
    // this function is because useEffect's function cannot be async by itself.
    const init = async () => {
      const response = await getBeers({ page: 1, per_page: 10 });
      setBeers(response);
    };
    if(beers.length === 0) {
      init();
    }
  }, [beers]);

  useEffect(() => {
    // this function is because useEffect's function cannot be async by itself.
    const updateBeers = async () => {
      const response = await getBeers({ page, per_page: 10 });
      setBeers(response);
    };
    updateBeers();
  }, [page])
  return (
    <div>
      <Image className="logo-image" src={logo}/>
      <Input placeholder="Search by name" onChange={(event, { value }) => setBeerName(value !== "" ? value : null)} />
      <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Picture</Table.HeaderCell>
          <Table.HeaderCell>Brew date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {beers.map((beer, index) => <Beer beer={beer} key={index}/>)}
      </Table.Body>
      </Table>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          onPageChange={(event, data) => setPage(data.activePage)}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={33}
        />
    </div>
  );
}

export default App;
