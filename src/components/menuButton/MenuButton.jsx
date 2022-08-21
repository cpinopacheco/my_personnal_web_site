import { useEffect, useRef } from "react";
import useApp from "../../hooks/useApp";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const { isOpen, setIsOpen, isChecked, setIsChecked } = useApp();
  const menuButton = useRef(null);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuButton.current && !menuButton.current.contains(e.target)) {
        setIsOpen(false);
        setIsChecked(false);
      }
    }

    // Adding click event listener
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  });

  return (
    <div className={styles.container} ref={menuButton}>
      <input
        id="toggle"
        className={styles.toggle}
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      ></input>

      <label
        htmlFor="toggle"
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.top}></div>
        <div className={styles.middle}></div>
        <div className={styles.bottom}></div>
      </label>
    </div>
  );
};

export default MenuButton;
