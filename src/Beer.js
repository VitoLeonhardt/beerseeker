import React from "react";

export const Beer = ({ beer }) => { // my eyes hurt from looking at the letters b e e r
    const { name, image_url, first_brewed } = beer;
    return (<div>
        <div>{name}</div>
        <div><img src={image_url}/></div>
        <div>{first_brewed}</div>
    </div>)
}