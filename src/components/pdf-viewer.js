
const PdfViewer = (props) => {
  return (
    <iframe
      src={props.source}
      style={{
        width: props.width,
        height: props.height,
        border: "none"
      }}
      title={props.title}
    />
  )
}

PdfViewer.defaultProps = {
  source: "",
  width: "100vw",
  height: "100vh",
  title: "Sample PDF"
}

export default PdfViewer;
