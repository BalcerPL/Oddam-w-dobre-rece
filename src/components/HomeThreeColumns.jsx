import React, { useContext } from "react";
//
import { GlobalContext } from "../context/GlobalContext";
//
import "../sass/homeThreeColumns.scss";
// MAIN
export default function HomeThreeColumns() {
  const { bags, organizations, localCollections } = useContext(GlobalContext);
  return (
    <div className="homeThreeColumns">
      <div className="homeThreeColumns__column">
        <span className="counterDisplay">{bags}</span>
        <h3>Oddanych worków</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          inventore, adipisci magni aut assumenda dolores fuga harum
          perspiciatis quod. Repellat commodi maiores reprehenderit, quam
          aliquam consequatur vitae sed dolores explicabo.
        </p>
      </div>
      <div className="homeThreeColumns__column">
        <span className="counterDisplay">{organizations}</span>
        <h3>Wspartych organizacji</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
          labore aut iure blanditiis rerum voluptates, cum vitae voluptas
          eveniet quos nobis nulla facilis necessitatibus maxime provident vero
          error consequuntur fuga.
        </p>
      </div>
      <div className="homeThreeColumns__column">
        <span className="counterDisplay">{localCollections}</span>
        <h3>Zorganizowanych zbiórek</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit minima dolor, commodi accusamus aperiam eligendi iusto
          nobis dignissimos iure pariatur harum, voluptates natus labore
          reiciendis veritatis nam, dolorum exercitationem obcaecati.
        </p>
      </div>
    </div>
  );
}
