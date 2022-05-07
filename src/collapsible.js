import React from 'react'


const Collapsible = ({ items, collapseIndex, setCollapseIndex }) => {

  const handleCollapse = (index) => {
    if(index === collapseIndex) {
      setCollapseIndex(null)
    } else {
      setCollapseIndex(index)
    }
  }

  return (
    <div className="accordion" id="accordionExample">
      {
        items && items.map((item, index) => {
          return (
            <div key={`${item.header}-${index}`} className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${index === collapseIndex ? "" : "collapsed"}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={ index === collapseIndex ? "true" : "false" }
                  aria-controls={`collapseOne${index}`}
                  onClick={() => handleCollapse(index)}
                >
                  {item.header}
                </button>
              </h2>
              <div
                id={`collapseOne${index}`}
                className={`accordion-collapse collapse ${ index === collapseIndex ? "show" : "" }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {item.body}
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Collapsible;
