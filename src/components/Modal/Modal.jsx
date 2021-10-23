import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FocusOn } from 'react-focus-on';

function ModalPortal({ children }) {
  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-portal')
  );
}

export function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalPortal>
      <FocusOn
        onEscapeKey={() => {
          onClose();
        }}
      >
        <div className="h-screen w-screen bg-black bg-opacity-75 fixed top-0 left-0 z-50 flex justify-center items-center">
          <section
            role="dialog"
            className="bg-white min-h-48 w-8/12 text-gray-900 rounded relative flex flex-col"
          >
            <button
              onClick={() => onClose()}
              className="absolute text-xl right-0 top-0 font-bold p-2 hover:bg-blue-200 active:bg-blue-400"
            >
              &times;
            </button>
            {children}
          </section>
        </div>
      </FocusOn>
    </ModalPortal>
  );
}

export function ModalHeader({ children }) {
  return <header className="border-b-2 p-2">{children}</header>;
}

export function ModalFooter({ children }) {
  return (
    <footer className="flex justify-end border-t-2 items-center p-2">
      {children}
    </footer>
  );
}

export function ModalContent({ children }) {
  return (
    <section className="flex-1 max-h-96 overflow-y-auto p-2">
      {children}
    </section>
  );
}

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    modalProps: {
      isOpen,
      onClose,
    },
  };
}
