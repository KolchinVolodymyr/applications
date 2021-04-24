import React from 'react';
import {Item} from "./Item";


export const renderItem = ({ item }) => (
    <Item name={item.name} email={item.email} />
);