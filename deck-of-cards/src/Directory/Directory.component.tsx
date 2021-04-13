
import React, { useState } from 'react'
import { Card, CardDeck } from 'react-bootstrap';
import { DectOfCardsArray } from '../Deck';
import './Directory.component.scss'
import { DeckObj } from './interface';
const Directory = () => {
    let [_deckCardArray, setDeckCardArray]: any[] = useState([]);
    let [_shuffledCardArray, setShuffledCardArray]: any[] = useState([]);
    let [_dropCardArray, setDropCardArray]: any[] = useState([]);
    let [_sortArray, setSortArray]: any[] = useState([]);
    const [drawValue, setDrawValue] = React.useState<number | undefined>();
    let list: DeckObj[] = DectOfCardsArray;
    const commonFunction = (array: DeckObj[]) => {
        let items = [];
        if (array) {
            for (let i = 0; i < array.length; i++) {
                let value = array[i].value === 11 ? 'J' : array[i].value === 12 ? 'Q'
                : array[i].value === 13 ? 'K' : array[i].value === 14 ? 'A' : array[i].value;   
                let newObj: DeckObj = {
                    ...array[i],
                    suit: "",
                    value: value + ' of ' + array[i].suit
                };
                items.push(newObj);
            }
            return items;
        }
    }
    const onReset = () => {
        let originalList: DeckObj[] = [];
        originalList = DectOfCardsArray;
        setDeckCardArray(commonFunction(originalList));
    }
    const onShuffle = () => {
        let m = list.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);

            [list[m], list[i]] = [list[i], list[m]];
        }
        setShuffledCardArray(commonFunction(list));
    }
    const Drawcard = () => {
        let originalList: DeckObj[] = [];
        originalList = DectOfCardsArray;
        console.log({drawValue})
        let numberOfCards: any = drawValue;
        debugger;
        for(let i=0; i <  numberOfCards ; i++) {
            originalList.pop();
        }
        setDropCardArray(commonFunction(originalList));
        
    }
    const Sortcard = () => {
        let items: DeckObj[] = _shuffledCardArray;
        items.sort((a,b) => {          
               if (a.suit === b.suit) {
                  return b.value - a.value;
               }
               return a.suit > b.suit ? 1 : -1;
            });
        debugger;    
        setSortArray(items);    
    }
    return (
        <div>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Reset</h1>
                        <button className=' subtitle custom-button' onClick={() => onReset()}>
                            Reset the Cards
                    </button>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Shuffle</h1>
                        <button className=' subtitle custom-button' onClick={() => onShuffle()}>
                            Shuffle the Cards
                    </button>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Draw Card from Deck</h1>
                        <input type='text' value = {drawValue} onChange = {(e) => setDrawValue(parseInt(e.target.value))}/> 
                        <br />
                        <button className=' subtitle custom-button' onClick={Drawcard}>
                            Draw cards from the deck
                        </button>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Sort</h1>
                        <button className=' subtitle custom-button' onClick={Sortcard}>
                            Sort the Cards
                    </button>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Save</h1>
                        <button className=' subtitle custom-button'>
                            Save the Cards
                    </button>
                    </div>
                </div>
            </div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Deck Of cards</Card.Title>
                        <Card.Text>
                        {
                            _deckCardArray.map((item: DeckObj, index: any) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {item.value}
                                        </span>
                                    </li>
                                )
                            })
                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Shuffled cards</Card.Title>
                        <Card.Text>
                        {
                            _shuffledCardArray.map((item: DeckObj, index: any) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {item.value}
                                        </span>
                                    </li>
                                )
                            })
                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Deck Of Cards after removing draw cards</Card.Title>
                        <Card.Text>
                        {
                            _dropCardArray.map((item: DeckObj, index: any) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {item.value}
                                        </span>
                                    </li>
                                )
                            })
                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Sorted Cards</Card.Title>
                        <Card.Text>
                        {
                            _sortArray.map((item: DeckObj, index: any) => {
                                return (
                                    <li key={index}>
                                        <span>
                                            {item.value}
                                        </span>
                                    </li>
                                )
                            })
                        }
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Saved Cards</Card.Title>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>

        </div>

    )
}

export default Directory
