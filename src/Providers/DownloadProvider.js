import React, { createContext, useContext } from 'react';

const context = createContext({ download() {} });

export function DownloadProvider({ children }) {
  const download = (elementID, imageName) => {
    const downloadLink = document.createElement(`a`);
    downloadLink.setAttribute(`download`, `${imageName}.png`);
    const canvas = document.getElementById(elementID);
    const dataURL = canvas.toDataURL(`image/png`);
    const url = dataURL.replace(/^data:image\/png/,`data:application/octet-stream`);
    downloadLink.setAttribute(`href`, url);
    downloadLink.click();
  };

  return <context.Provider value={{ download }}>{children}</context.Provider>
};

export const useDownloadCanvas = () => useContext(context);