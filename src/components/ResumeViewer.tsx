import React from "react";

/**
 * ResumeViewer
 * Displays the CV inside an embedded PDF viewer with a download option.
 * The PDF (MOHAMED_KHALED_GHAREEB.pdf) must reside in the public folder.
 */
const ResumeViewer: React.FC = () => {
  const pdfPath = "/img/MOHAMED KHALED GHAREEB.pdf";

  return (
    <div className="vstack h-full w-full">
      <object
        data={pdfPath}
        type="application/pdf"
        className="flex-1 w-full border-none min-h-0"
      >
        <a href={pdfPath} target="_blank" rel="noreferrer">Open PDF</a>
      </object>

    </div>
  );
};

export default ResumeViewer;
