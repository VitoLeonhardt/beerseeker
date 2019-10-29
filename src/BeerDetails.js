import React from "react";
import { Modal, Header } from "semantic-ui-react";

export const BeerDetails = ({ beer, onClose }) => (
    <Modal
        open={!!beer}
        onClose={onClose}
        size="small"
    >
        {beer &&
        <>
        <Header content={beer.name || ""} />
        <Modal.Content>
        </Modal.Content>
        </>}
    </Modal>
);
