import { actionTypes } from '../../types/types';

/*import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { steam } from "../../actions/Steam";
import { ps4 } from "../../actions/ps4";
import { xbox } from "../../actions/xbox";
import "./style.css";

interface redux {
  platform: string;
  platformNumber: number;
}

const Select = () => {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  const platform = useSelector((stats: redux) => {
    return stats.platform;
  });

  const onClick = (value: string) => {
    switch (value) {
      case "STEAM":
        dispatch(steam());
        break;
      case "XBOX":
        dispatch(xbox());
        break;
      case "PS4":
        dispatch(ps4());
        break;
    }
  };

  const onClickShow = () => {
    showList ? setShowList(false) : setShowList(true);
  };
  return (
    <div className="selectBar">
      <div className='selectPlatform'>
        <h4 onClick={() => onClickShow()}>{platform}</h4>
      </div>
      <ul>
        <li style={{ display: showList ? "block" : "none" }}>
          <p onClick={() => onClick("STEAM")}>Steam</p>
        </li>
        <li style={{ display: showList ? "block" : "none" }}>
          <p onClick={() => onClick("XBOX")}> Xbox</p>
        </li>
        <li style={{ display: showList ? "block" : "none" }}>
          <p onClick={() => onClick("PS4")}>Ps4</p>
        </li>
      </ul>
    </div>
  );
};

export default Select;
*/