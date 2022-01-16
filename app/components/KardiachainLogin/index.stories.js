import React from "react";
import ButtonLink from '../ButtonLink';
import Img from '../Img';
import btnKar from './btn-kardiachain.svg';

const KardiaChainButton = () => {
    return <ButtonLink><Img src={btnKar} alt="kardiachain" /></ButtonLink>
}
export default {
    title: "Components/ButtonKardiachain",
    component: KardiaChainButton,
  };
  
export const Default = () => 
    <KardiaChainButton />



