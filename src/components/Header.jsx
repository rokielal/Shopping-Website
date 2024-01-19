import React, { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }
// Here we are using useEffect to syle the HTML element and pass isModalOpen in dependency array show that when cart section is clicked isModalOpen becomes true and in html scroll option will be hidden. Again when user clicked on backdrop isModalOpen becomes false and html scroll wiil be enabled.
  useEffect(() => {
    if (isModalOpen) {
      // document.documentElement this select the html element
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
    // useEffect will call whenever state of Modal change
  }, [isModalOpen]);

  return (
    <header>
      <nav>
        <h1 className="logo">Shop Now</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Cart Item
        </button>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default Header;
