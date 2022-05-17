import React from "react";
import AreaDados from "../AreaDados/AreaDados";
import Cabecalho from "../Cabecalho/Cabecalho";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal";
import AreaDados from "../AreaDados/AreaDados";
import './Geral.css';


function Geral() {
  return (
    <div className="Geral">
      <Cabecalho/>
      <MenuHorizontal/>
      <AreaDados/>

    </div>
  );
}

export default Geral;
