import { useRef } from "react";
import useApp from "../../hooks/useApp";
import styles from "./MenuButton.module.css";

const MenuButton = () => {
  const { isOpen, setIsOpen, isChecked, setIsChecked } = useApp();

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
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
