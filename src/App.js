import { useState } from 'react';
import './App.css';
import RenderedPDF from './containers/rendered-pdf';
import DuckettHTMLCSSBook from "./pdfs/Duckett_HTML_CSS.pdf";
import CProgramming from "./pdfs/C_Programming.pdf";
import ProGit from "./pdfs/Pro_Git.pdf";


const App = () => {
  const [ active, setActive ] = useState("Duckett_HTML_CSS");
  console.log({ active })

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        direction: 'column',
        backgroundColor: '#f2f2f2',
        minWidth: '100vw',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          width: '15vw',
          backgroundColor: '#d9d9d9',
          paddingTop: 20,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div
          style={{
            padding: '5px 0px',
            margin: '5px 0px',
            cursor: 'pointer',
            boxShadow: '0 0 5px #999999'
          }}
          onClick={() => setActive("Duckett_HTML_CSS")}
        >
          HTML & CSS
        </div>
        <div
          style={{
            padding: '5px 0px',
            margin: '5px 0px',
            cursor: 'pointer',
            boxShadow: '0 0 5px #999999'
          }}
          onClick={() => setActive("git")}
        >
          Git
        </div>
        <div
          style={{
            padding: '5px 0px',
            margin: '5px 0px',
            cursor: 'pointer',
            boxShadow: '0 0 5px #999999'
          }}
          onClick={() => setActive("C")}
        >
          C Programming
        </div>
      </div>
      <div style={{ width: '85vw'}}>
        {
          active === 'Duckett_HTML_CSS' ?
          <RenderedPDF title="Duckett HTML CSS Book" book={DuckettHTMLCSSBook} />
          :
          active === 'C'
          ?
          <RenderedPDF title="C Programming" book={CProgramming} />
          :
          active === 'git'
          ?
          <RenderedPDF title="Git" book={ProGit} />
          :
          <RenderedPDF title="Duckett HTML CSS Book" book={""} />
        }
      </div>
    </div>
  );
}

export default App;
