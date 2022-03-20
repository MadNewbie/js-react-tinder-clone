import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
    const characters = [
        {
            name: 'Dian',
            url: 'https://i.imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Febi',
            url: 'https://i.imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Riska',
            url: 'https://i.imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Feni',
            url: 'https://i.imgur.com/oPj4A8u.jpg'
        },
        {
            name: 'Lena',
            url: 'https://i.imgur.com/oPj4A8u.jpg'
        },
    ];
    const [lastDirection, setLastDirection] = useState();

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
    }

    const outOfFame = (name) => {
        console.log(name + ' left the screen');
    }


    return (
        <div className="dashboard">
            <ChatContainer/>
            <div className="swipe-container">
                <div className="card-container">
                    {characters.map((character) => 
                        <TinderCard
                            className="swipe"
                            key={character.name}
                            onSwipe={(dir) => swiped(dir, character.name)}
                            onCardLeftScreen={()=>outOfFame(character.name)}>
                            <div style={{backgroundImage: 'url(' + character.url + ')'}} className="card">
                                <h3>{character.name}</h3>
                            </div>
                        </TinderCard>
                    )}
                    <div className="swipe-info">
                        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard