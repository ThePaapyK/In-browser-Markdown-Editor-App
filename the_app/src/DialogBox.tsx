import React from 'react';
import { Overlay, DialogBox, HeadingP, MessageP } from './DialogBoxStyles';

interface DialogProps {
  onClose: () => void;
  isChecked: boolean;
}


export default function DialogaBox({onClose, isChecked}: DialogProps) {

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
           'welcome.md' document and its contents?
           This action cannot be reversed.
        </MessageP>
        <button>
          Confirm & Delete
        </button>
      </DialogBox>
    </Overlay>
  );
};
