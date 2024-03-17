import React from "react";

function TabTitle({ id, title, activeTab, setActiveTab }) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <main
      onClick={handTabSwitch}
      className={activeTab === id ? "activeS" : "notActiveS"}
    >
      <ul className=" tabTitle">
        <li id={id} >
          <div className="tabSides">
            <div>
            <input type="radio" name="" id="" />
            </div>
          <h4>{title}</h4>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default TabTitle;
