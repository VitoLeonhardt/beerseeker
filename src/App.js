import React, { useEffect, useState } from 'react';
import { Table, Image, Pagination, Input, Button, Radio } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import logo from "./beerseker.jpg";
import './App.css';

import { Beer } from "./Beer.js";
import { getBeers } from "./utils.js";
import { BeerDetails } from "./BeerDetails.js"

function App() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [beerName, setBeerName] = useState("");
  const [brewDate, setBrewDate] = useState(null);
  const [beforeAfter, setBeforeAfter] = useState(null);
  const [searchParams, setSearchParams] = useState({});
  const [beerDetails, setBeerDetails] = useState(null);

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
      const response = await getBeers({ page, per_page: 10, ...searchParams });
      setBeers(response);
    };
    updateBeers();
  }, [page, searchParams]);

  const detailedSearch = async () => {
    let params = {};
    if(beerName.length > 0) {
      params.name = beerName;
    }
    if(beforeAfter && brewDate) {
      params["brewed_" + beforeAfter] = brewDate;
    }
    setSearchParams(params);
    setPage(1);
  }

  const resetParams = () => {
    setBeerName("");
    setBeforeAfter(null);
    setBrewDate(null);
    setSearchParams({});
    setPage(1);
  }

  return (
    <div>
      <BeerDetails beer={beerDetails} onClose={() => setBeerDetails(null)} />
      <Image className="logo-image" src={logo}/>
      
      <Input placeholder="Search by name" value={beerName} onChange={(event, { value }) => setBeerName(value !== "" ? value : null)} />
      <DateInput 
        placeholder="Brew date before/after"
        dateFormat="MM-YYYY"
        value={brewDate}
        onChange={(event, { value }) => setBrewDate(value)}
      />
      <Radio
            label="Before"
            name="radioGroup"
            value="before"
            checked={beforeAfter === "before"}
            onChange={(event, data) => setBeforeAfter(data.value)}
      />
      <Radio
        label="After"
        name="radioGroup"
        value="after"
        checked={beforeAfter === "after"}
        onChange={(event, data) => setBeforeAfter(data.value)}
      />
      <br/>
      <Button onClick={() => detailedSearch()}>Detailed search</Button>
      <Button onClick={() => resetParams()}>Reset search</Button>
      <Table celled selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Picture</Table.HeaderCell>
          <Table.HeaderCell>Brew date</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {beers.map((beer, index) => <Beer beer={beer} key={index} onClick={(b) => setBeerDetails(b)} />)}
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
