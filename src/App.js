import React, { useEffect, useState } from 'react';
import { Table, Image, Pagination } from "semantic-ui-react";
import logo from "./beerseker.jpg";
import './App.css';

import { Beer } from "./Beer.js";
import { getBeers } from "./utils.js";

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // this function is because useEffect's function cannot be async by itself.
    const init = async () => {
      const response = await getBeers({ page: 1, per_page: 10 });
      console.log(beers);
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
      console.log(beers);
      setBeers(response);
    };
    updateBeers();
  }, [page])
  return (
    <div>
      <Image className="logo-image" src={logo}/>
      <Table celled selectable>
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
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          onPageChange={(event, data) => setPage(data.activePage)}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={50}
        />
    </div>
  );
}

export default App;
