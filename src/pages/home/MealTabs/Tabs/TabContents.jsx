function TabContents({ id, activeTab, comps }) {
  return activeTab === id ? <div className=""> {comps} </div> : "";
}

export default TabContents;
