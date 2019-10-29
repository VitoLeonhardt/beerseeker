import React from "react";
import { Modal, Header, Grid, Image } from "semantic-ui-react";

import "./BeerDetails.css";

export const BeerDetails = ({ beer, onClose }) => 
    (
    <Modal
        open={!!beer}
        onClose={onClose}
        size="small"
    >
        {beer &&
        <>
        <Header content={beer.name || ""} />
        <Modal.Content>
            <Grid>
                <Grid.Column width={3}>
                    <Image src={beer.image_url}/>
                </Grid.Column>
                <Grid.Column width={13}>
                    <div className="beer-details-text"><i>{beer.description}</i></div>
                    <div className="beer-details-text"><b>ABV: </b>{beer.abv}</div>
                    <div className="beer-details-text"><b>Volume: </b>{beer.volume.value + " " + beer.volume.unit} </div>
                    <div className="beer-details-text"><b>Food pairings: </b>
                        <ul>
                            <>
                            {beer.food_pairing.map((pairing) => <li>{pairing}</li>)}
                            </>
                        </ul>
                    </div>
                </Grid.Column>
            </Grid>
        </Modal.Content>
        </>}
    </Modal>
);