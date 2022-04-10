
const PdfViewer = (props) => {
  return (
    <iframe
      src={props.source}
      style={{
        width: props.width,
        height: props.height,
        border: "none"
      }}
    />
  )
}

PdfViewer.defaultProps = {
  source: "",
  width: "100vw",
  height: "100vh"
}

export default PdfViewer;
