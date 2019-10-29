import React from "react";
import { Table, Image } from "semantic-ui-react";
import "./Beer.css";

export const Beer = ({ beer, onClick }) => { // my eyes hurt from looking at the letters b e e r
    const { name, image_url, first_brewed } = beer;
    return (
    <Table.Row onClick={() => onClick(beer)} className={"beer-row"}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell><Image className="beer-image" src={image_url} alt="beer"/></Table.Cell>
        <Table.Cell>{first_brewed}</Table.Cell>
    </Table.Row>)
}