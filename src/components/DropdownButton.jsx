import downIcon from "../assets/images/icon-arrow-down.svg";
import upIcon from "../assets/images/icon-arrow-up.svg";

const DropdownButton = ({ activeItem, setActiveItem, children }) => {
  let itemName = children.toLowerCase();

  const handleClick = () => {
    activeItem == itemName ? setActiveItem("") : setActiveItem(itemName);
  };

  return (
    <button onClick={() => handleClick()}>
      {children}{" "}
      <img
        src={activeItem == itemName ? upIcon : downIcon}
        alt={activeItem == itemName ? "up Icon" : "down Icon"}
      />
    </button>
  );
};

export default DropdownButton;
