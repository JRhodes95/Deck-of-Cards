import React, { useEffect, useState } from 'react'
import { DectOfCardsArray } from '../Deck';
import './Directory.component.scss'
import { DeckObj } from './interface';
const Directory = () => {
    let [_deckCardArray, setDeckCardArray]: any[] = useState([]);
    let list: DeckObj[] =  DectOfCardsArray;
    // useEffect(() => {
    //     console.log(_deckCardArray);
    //     let items = [];
    //     if(list) {
    //         for(let i=0; i< list.length;i++) {
    //             let newObj:DeckObj = {
    //                 ...list[i],
    //                 suit: "",
    //                 value: list[i].value + 'of' + list[i].suit
    //             };
    //             items.push(newObj);
    //         }
    //         setDeckCardArray(items);
    //     }
    // }, [list]);
    const onDisplay = () => {
        console.log(_deckCardArray);
        let items = [];
        if(list) {
            for(let i=0; i< list.length;i++) {
                let newObj:DeckObj = {
                    ...list[i],
                    suit: "",
                    value: list[i].value + ' of ' + list[i].suit
                };
                items.push(newObj);
            }
            debugger;
            setDeckCardArray(items);
        }
    }
    return (
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Display</h1>
                    <button className=' subtitle custom-button' onClick={() => onDisplay()}>
                        Display the Cards
                    </button>
                    {
                        _deckCardArray.map((items: DeckObj) => {
                            <h1>{items.value}</h1>
                        })
                    }
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Shuffle</h1>
                    <button className=' subtitle custom-button'>
                        Shuffle the Cards
                    </button>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sort</h1>
                    <button className=' subtitle custom-button'>
                        Sort the Cards
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Directory
