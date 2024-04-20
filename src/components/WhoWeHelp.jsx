import React, { useState } from "react";
import { fundacje, organizacje, lokalneZbiorki } from "../data/whoWeHelpData";
import "../sass/whoWeHelp.scss";

export default function WhoWeHelp() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (tabNumber) => {
    setSelectedTab(tabNumber);
    setCurrentPage(1); // Reset current page when changing tabs
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageButtons = (totalItems) => {
    const itemsPerPage = 3;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    return Array.from({ length: totalPages }, (_, i) => {
      return (
        <button
          key={i}
          className="whoWeHelp__list__pages__btn"
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </button>
      );
    });
  };

  const renderItems = (items) => {
    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, items.length);

    return items.slice(startIndex, endIndex).map((item, index) => (
      <div key={index} className="whoWeHelp__list__item">
        <p className="list-title">{item.name}</p>
        <p className="list-description">{item.description1}</p>
        {item.description2 && (
          <p className="list-description">{item.description2}</p>
        )}
      </div>
    ));
  };

  return (
    <div className="whoWeHelp" id="whoWeHelp">
      <h2>Komu pomagamy</h2>
      <span className="whoWeHelp__line"></span>
      <div className="whoWeHelp__buttons">
        <button className="heroBTN" onClick={() => handleTabChange(1)}>
          Fundacjom
        </button>
        <button className="heroBTN" onClick={() => handleTabChange(2)}>
          Organizacjom <br /> pozarządowym
        </button>
        <button className="heroBTN" onClick={() => handleTabChange(3)}>
          Lokalnym <br /> zbiórkom
        </button>
      </div>
      <p className="whoWeHelp__p">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, <br />z
        którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają
        i czego potrzebują.
      </p>
      <div className="whoWeHelp__list">
        {selectedTab === 1 && renderItems(fundacje)}
        {selectedTab === 2 && renderItems(organizacje)}
        {selectedTab === 3 && renderItems(lokalneZbiorki)}
      </div>
      <div
        className={`whoWeHelp__list__pages ${
          selectedTab === 3 ? "hidden" : ""
        }`}
      >
        {/* {Array.from({ length: Math.ceil(fundacje.length / 3) }, (_, i) => (
          <button
            key={i}
            className="whoWeHelp__list__pages__btn"
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))} */}
        {selectedTab === 1 && renderPageButtons(fundacje.length)}
        {selectedTab === 2 && renderPageButtons(organizacje.length)}
        {selectedTab === 3 && renderPageButtons(lokalneZbiorki.length)}
      </div>
    </div>
  );
}
