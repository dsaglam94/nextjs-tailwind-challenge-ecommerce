const MenuToggle = ({ isNavOpen, handleClick }) => {
  return (
    // this is my custom menu bar
    <div onClick={handleClick} className="menu-container cursor-pointer">
      <div
        className={isNavOpen ? "menu-toggle active group" : "menu-toggle group"}
      >
        <span className="group-hover:bg-accent"></span>
        <span className="group-hover:bg-accent"></span>
        <span className="group-hover:bg-accent"></span>
      </div>
    </div>
  );
};

export default MenuToggle;
