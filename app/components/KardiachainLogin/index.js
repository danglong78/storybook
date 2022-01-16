/**
 * Kardiachain Wallet - https://kardiachain.io/
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ButtonLink from 'components/ButtonLink';
import Img from 'components/Img';
import Wrapper from './Wrapper';

import cRequest from 'utils/server';
import { redirectHome, getResStatus, cacthError, cacthResponse  } from 'utils/helpers';
import { setUserData } from 'utils/auth';
import * as Noti from 'utils/notification';
import {API_LOGIN_EXT} from 'constants/api';
// Images
import btnKar from './btn-kardiachain.svg';

// let wallet = "0x1eAc82F22FCf303a00204e13704Feb01B4d3A92D";
let wallet = "";
window.addEventListener('load', async () => {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.enable();
      // Acccounts now exposed
      console.log(web3);
      return web3;
    } catch (error) {
      console.error(error);
    }
  }
  // Legacy dapp browsers...
  else if (window.web3) {
    // Use Mist/MetaMask's provider.
    const web3 = window.web3;
    console.log('Injected web3 detected.');
    return web3;
  }
  // Fallback to localhost; use dev console port by default...
  else {
    const provider = new Web3.providers.HttpProvider('http://localhost:8545');
    const web3 = new Web3(provider);
    console.log('No web3 instance injected, using Local web3.');
    return web3;
  }
});

function KardiachainLogin() {
  const handleClick = event => {
    cRequest.post(API_LOGIN_EXT, {wallet: wallet})
    .then(res=>{
      const status = getResStatus(res);
      if (status == '200') {
        setUserData(res);
        Noti.showNotiSuccess(<FormattedMessage {...messages.success} />, {onClose: () => redirectHome()});
      } else if(status == '500'){
        Noti.showNotiError(<FormattedMessage {...messages.error} />);
      } else{
        cacthResponse(res);
      }
    }).catch(err=>cacthError(err));
  }; 

  return (
    <Wrapper>
      <ButtonLink onClick={handleClick}><Img src={btnKar} alt="kardiachain" /></ButtonLink>
    </Wrapper>
  );
}

export default KardiachainLogin;

