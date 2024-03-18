import React, { useState } from "react";
import { TabsData } from "./TabsData";
import TabContents from "./Tabs/TabContents";
import TabTitle from "./Tabs/TabTitle";
import './different-meals.css'

const DifferentMeals = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    // <div className="">
    <div className="">
        <div className="mel">
        <h1>Our Menu</h1>
        <p>Available meals on our menu</p>
      </div>
      <main className="">
        <article className="">
          <section className="dd">
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
        </article>

        <article className="tabContents">
          {TabsData.TabContents.map(({ id, comp }) => (
            <div key={id}>
              <TabContents id={id} activeTab={activeTab} comps={comp} />
            </div>
          ))}
        </article>
      </main>
    </div>
    // </div>
  );
};

export default DifferentMeals;
