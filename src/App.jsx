import React from 'react';
import Header from './components/Header';
import JournalComponents from './components/JournalComponents';
import data from './data';

export default function App() {
  const journals = data.map((journal) => {
    return <JournalComponents key={journal.id} {...journal} />;
  });
  return (
    <div>
      <Header />
      <main>{journals}</main>
    </div>
  );
}
