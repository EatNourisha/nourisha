import TabTitle from "./TabTitle";

function TabHeaders({ TabsData, activeTab, setActiveTab }) {
  return (
    <main className="">
      <aside className="">
        <section className="">
          {TabsData.TabTitle.map(({ id, title }) => (
            <div key={id}>
              <TabTitle
                id={id}
                title={title}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          ))}
        </section>
      </aside>
    </main>
  );
}

export default TabHeaders;
