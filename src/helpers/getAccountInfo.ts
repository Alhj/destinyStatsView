import { respons } from '../types/types';
import { responsAllChars, errorInFetch, profilId } from '../types/types';

const getAccountInfo = async (platformNumber: string | undefined, accountName: string | undefined) => {

  const apiKeyRespons = await fetch('/apiKey');

  const apiKey: string | null = apiKeyRespons.headers.get('authorization');

 /* const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`)
*/
 
  const accoutnData: respons | errorInFetch = await fetch(`/character/${platformNumber}/${accountName}`).then(res => res.json());

  if ((accoutnData as errorInFetch).error) {
    return (accoutnData as errorInFetch);
  } else {
    return (accoutnData as respons).characters
  }

};


const getAccountStats = async (platformNumber: string | undefined, userName: string | undefined) => {
  const apiKeyRespons = await fetch('/apiKey');

  const apiKey: string | null = apiKeyRespons.headers.get('authorization');

  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`);

  const config = {
    headers: header
  };

  const accoutnData: responsAllChars = await fetch(`/stats/${platformNumber}/${userName}`, config).then(res => res.json());
  return accoutnData.Response
};

const getAccountProfil = async (platformNumber: string | undefined, displayName: string | undefined) => {

  const apiKeyRespons = await fetch('/apiKey');

  const apiKey: string | null = apiKeyRespons.headers.get('authorization');

  const header: HeadersInit = new Headers();

  header.set('authorization', `${apiKey}`);

  const config = {
    headers: header
  };

  const respons: profilId | errorInFetch = await fetch(`/profil/${platformNumber}/${displayName}`, config).then(res => res.json());


  return respons;

};

export {
  getAccountInfo,
  getAccountStats,
  getAccountProfil
};