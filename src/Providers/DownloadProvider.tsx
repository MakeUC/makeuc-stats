import { createContext, FC, ReactNode, useCallback, useContext } from 'react';
import domtoimage from 'dom-to-image';

type DownloadFunction = (elementId: string, imageName: string) => void;

export type DownloadContext = {
  download: DownloadFunction;
}

export type DownloadProviderProps = {
  children: ReactNode;
}

const context = createContext<DownloadContext>({ download() {} });

export const DownloadProvider: FC<DownloadProviderProps> = ({ children }) => {
//   const download: DownloadFunction = useCallback((elementId, imageName) => {
//     const downloadLink = document.createElement(`a`);
//     downloadLink.setAttribute(`download`, `${imageName}.png`);
//     const canvas = document.getElementById(elementId) as HTMLCanvasElement;
//     const dataURL = canvas.toDataURL(`image/png`);
//     const url = dataURL.replace(/^data:image\/png/,`data:application/octet-stream`);
//     downloadLink.setAttribute(`href`, url);
//     downloadLink.click();
//   }, []);

  const download: DownloadFunction = useCallback((elementId, imageName) => {
    const node = document.getElementById(elementId);

    if (!node) return;

    let removedChild: ChildNode;
    if (node.lastChild)
        removedChild = node.removeChild(node.lastChild)

    domtoimage
        .toPng(node)
        .then((dataStr) => {
            const downloadLink = document.createElement(`a`);
            downloadLink.setAttribute(`download`, `${imageName}.png`);
            const dataURL = dataStr;
            const url = dataURL.replace(/^data:image\/png/,`data:application/octet-stream`);
            downloadLink.setAttribute(`href`, url);
            downloadLink.click();
            downloadLink.remove();

            if (removedChild)
                node.appendChild(removedChild);
        });
  }, []);

  return <context.Provider value={{ download }}>{children}</context.Provider>
};

export const useDownloadCanvas = () => useContext(context);