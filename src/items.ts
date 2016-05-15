import {HelloList} from './list'
import {createStore, applyMiddleware} from 'redux';

export let __hotReload = true

export interface HelloListItem {
    id: number,
    text: string,
}

export const testItems : HelloListItem[] =  [
    { id: 1, text: "typescript" },
    { id: 2, text: "react" },
    { id: 3, text: "systemjs" },
]