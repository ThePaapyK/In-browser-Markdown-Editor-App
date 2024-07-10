import React from 'react';
import { Overlay, DialogBox, HeadingP, MessageP } from './DialogBoxStyles';


interface DialogProps {
  onClose: () => void;
  isChecked: boolean;
  name: string;
  selectedDocIndex: number | null;
  deleteDocument: () => void;
}


export default function DialogaBox({onClose, name, deleteDocument, selectedDocIndex, isChecked}: DialogProps) {

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick} ischeck={isChecked}>
      <DialogBox ischeck={isChecked}>
        <HeadingP ischeck={isChecked}>Delete this document?</HeadingP>
        <MessageP ischeck={isChecked}>Are you sure you want to delete the 
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
