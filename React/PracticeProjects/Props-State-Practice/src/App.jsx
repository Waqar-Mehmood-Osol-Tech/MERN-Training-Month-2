import { useState } from 'react';
import Card from './components/Card';
import data from './assets/Data';

function App() {
  return (
    <div className="flex flex-row">
      <div className="gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            src={item.src}
            title={item.title}
            links={item.links}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
