import React, { useState } from 'react';
import Menu4 from "./menu4";
import Warranty from './Warranty';
import Warranty2 from './warranty2';
import Warranty3 from './Warranty3';
import Warranty4 from './Warranty4';
import WarrantyText from './WarrantyText';
import ServiceProcedure from './ServiceProcedure';
import WarrantyForfeiture from './WarrantyForfeiture';
import GeneralStatement from './GeneralStatement';
import RepairedProductReturnStatement from './RepairedProductReturnStatement';

const TakuuPage = () => {
    const [showWarranty, setShowWarranty] = useState(true);
    const [showWarranty2, setShowWarranty2] = useState(true);
    const [showWarranty3, setShowWarranty3] = useState(true);
    const [showWarranty4, setShowWarranty4] = useState(true);

    return (
        <div>
            <Menu4 />
            <h1>Takuu ehdot.</h1>
            <WarrantyText />
            
            {/* Näytä/Piilota Yarbocore takuu */}
            <button onClick={() => setShowWarranty(!showWarranty)}>
                {showWarranty ? 'Piilota' : 'Näytä'} Yarbocore
            </button>
            {showWarranty && <Warranty />}
            
            {/* Näytä/Piilota lumilinko takuu */}
            <button onClick={() => setShowWarranty2(!showWarranty2)}>
                {showWarranty2 ? 'Piilota' : 'Näytä'} lumilinko
            </button>
            {showWarranty2 && <Warranty2 />}
            
            {/* Näytä/Piilota ruohonleikkuri takuu */}
            <button onClick={() => setShowWarranty3(!showWarranty3)}>
                {showWarranty3 ? 'Piilota' : 'Näytä'} ruohonleikkuri
            </button>
            {showWarranty3 && <Warranty3 />}
            
            {/* Näytä/Piilota puhallin takuu */}
            <button onClick={() => setShowWarranty4(!showWarranty4)}>
                {showWarranty4 ? 'Piilota' : 'Näytä'} puhallin
            </button>
            {showWarranty4 && <Warranty4 />}
            
            {/* Palvelumenettely */}
            <ServiceProcedure />
            
            {/* Takuun menettäminen */}
            <WarrantyForfeiture />
            
            {/* Yleinen lausunto */}
            <GeneralStatement />
            
            {/* Korjatun tuotteen palautuslausunto */}
            <RepairedProductReturnStatement />
        </div>
    );
}

export default TakuuPage;