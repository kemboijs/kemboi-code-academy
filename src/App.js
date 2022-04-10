import './App.css';
import PdfViewer from "./components/pdf-viewer";
import duckettHTMLCSSBook from "./pdfs/Duckett_HTML_CSS.pdf";

function App() {
  return (
    <div className="App">
      <PdfViewer
        source={duckettHTMLCSSBook}
        title="Duckett HTML CSS Book"
      />
    </div>
  );
}

export default App;
