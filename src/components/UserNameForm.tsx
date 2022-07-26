import Select from "react-select";
import React, { useContext, useEffect, useState } from "react";
import ILOLUserName from "../interface/ILOLUserName";
import fetchUsername from "../api/lol-api-user";
import LOLUserNameContext from "../context/LOLUserNameContext";
import { useNavigate } from "react-router-dom";

const UserNameForm = () => {
  const [LOLuser, setLOLuser] = useContext(LOLUserNameContext);
  const regions = [
    { value: "br1", label: "BR1" },
    { value: "eun1", label: "EUN1" },
    { value: "jp1", label: "JP1" },
    { value: "euw1", label: "EUW1" },
    { value: "kr", label: "KR" },
    { value: "la1", label: "LA1" },
    { value: "la2", label: "LA2" },
    { value: "na1", label: "NA1" },
    { value: "oc1", label: "OC1" },
    { value: "ru", label: "RU" },
    { value: "tr1", label: "TR1" },
  ];

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    var userName = formData.get("userName");
    var region = formData.get("regions");

    if (userName != null && region != null && region != "") {
      fetchUsername(region, userName, setLOLuser);
    }
  };

  return (
    <>
      <form className="form-username" onSubmit={handleSubmit}>
        <p className="control">
          <span className="select is-medium">
            <select name="regions" placeholder="Regions">
              <option value="" disabled selected hidden>
                Region
              </option>
              {regions.map((region) => (
                <option value={region.value}>{region.label}</option>
              ))}
            </select>
          </span>
        </p>
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            id="pseudo"
            name="userName"
            required
            placeholder="Nom d'invocateur"
          />
        </div>

        <div className="control">
          <button type="submit" className="button is-medium">
            <span className="icon">
              <i className="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default UserNameForm;
