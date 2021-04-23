import React from 'react';
import {Item} from "./Item";


export const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} releaseYear={item.releaseYear} />
);