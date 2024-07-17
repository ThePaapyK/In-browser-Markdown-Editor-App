import React from 'react';
import { Overlay, DialogBox, HeadingP, MessageP } from './DialogBoxStyles';


interface DialogProps {
  onClose: () => void;
  isDarkMode: boolean;
  name: string;
  selectedDocIndex: number | null;
  deleteDocument: () => void;
}


export default function DialogaBox({onClose, name, deleteDocument, selectedDocIndex, isDarkMode}: DialogProps) {

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick} isdark={isDarkMode}>
      <DialogBox isdark={isDarkMode}>
        <HeadingP isdark={isDarkMode}>Delete this document?</HeadingP>
        <MessageP isdark={isDarkMode}>Are you sure you want to delete the 
          <span className="delName">'{name}</span>' document and its contents?
           This action cannot be reversed.
        </MessageP>
        <button onClick={() => {onClose(); deleteDocument();}}>
          Confirm & Delete
        </button>
      </DialogBox>
    </Overlay>
  );
};
