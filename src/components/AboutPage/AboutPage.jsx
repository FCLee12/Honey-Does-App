import React from 'react';
import KitchenForm from '../Client/Kitchen/KitchenForm';
import Message from '../Chat/Message';
import Chat from '../Chat/Chat';
import OtherRoom from '../Client/OtherRoom/OtherRoom';


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
      </div>
      <div>
        {/* <KitchenForm /> */}
        <Chat />
        {/* <OtherRoom /> */}
      </div>
    </div>
  );
}

export default AboutPage;
