import PdfViewer from "../components/pdf-viewer";

const RenderedPDF = ({ book, title }) => {
  return (
    <PdfViewer
      source={book}
      title={title}
      width="85vw"
    />
  )
}

export default RenderedPDF;
