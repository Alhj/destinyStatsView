import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";

import { getAccountProfil } from "../../helpers/getAccountInfo";
import { profilId, errorInFetch } from "../../types/types";

import Loading from "../loading/loading";

const GetPlayerProfil = () => {
  
  const {membershipType, displayName} = useParams();

  const history = useHistory();

  const loading = async () => {
    const respons = await getAccountProfil(membershipType, displayName);

    console.log(respons);

    if((respons as errorInFetch).error) {
      history.push('/')
    } else {
      const id = (respons as profilId).Respons;
      history.push(`/account/${membershipType}/${id}`)
    }
  }
  
  useEffect(() => {
    loading()
  });

  return <Loading />;
};

export default GetPlayerProfil;
