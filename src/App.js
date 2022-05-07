import { useState } from 'react';
import './App.css';
import Collapsible from "./collapsible";
import PathData from "./data/path-data";

const styles = {
  spacing: {
    paddingBottom: 10,
    marginLeft: 10
  },
  sectionRow: {
    display: "flex",
    flexDirection: "column",
    margin: 20
  },
  button: {
    padding: 5,
    marginBottom: 10,
    cursor: 'pointer'
  }
}

const App = () => {
  const [collapseIndex, setCollapseIndex] = useState(0);

  return (
    <div>
      <h3 style={{ textAlign: 'center', color: 'blueviolet' }}>Welcome To Kemboi Code Academy</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{...styles.sectionRow, width: '60vw'}}>
          <h3>Path (What to know)</h3>
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            <Collapsible items={PathData} collapseIndex={collapseIndex} setCollapseIndex={setCollapseIndex} />
          </div>
        </div>
        <div style={{...styles.sectionRow, width: '40vw'}}>
          <h3>Steps</h3>
          <a href='' style={{ ...styles.spacing }}>What is Coding</a>
          <a href='' style={{ ...styles.spacing }}>Introduction to Python</a>
          <a href='' style={{ ...styles.spacing }}>Introduction to C Programming</a>
          <a href='' style={{ ...styles.spacing }}>Data Structures & Algorithms</a>
          <a href='' style={{ ...styles.spacing }}>Basics of Terminal/Command Prompt</a>
          <a href='' style={{ ...styles.spacing }}>Git & Github</a>
          <a href='' style={{ ...styles.spacing }}>Learn HTML</a>
          <a href='' style={{ ...styles.spacing }}>Learn CSS</a>
          <a href='' style={{ ...styles.spacing }}>Introduction to Javascript</a>
          <a href='' style={{ ...styles.spacing }}>Dig Deap into Python3</a>
          <a href='' style={{ ...styles.spacing }}>Dig Deep into Javascript</a>
          <a href='' style={{ ...styles.spacing }}>Let's Learn Flask</a>
          <a href='' style={{ ...styles.spacing }}>Let's Learn React</a>
        </div>
      </div>
    </div>
  );
}

export default App;
