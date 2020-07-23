import React from "react";
import { Link } from "react-router-dom";
import { doctorListHeader } from "Util/table-cols";
import { DoctorDataList } from "Patient/mock-data";
import { history } from "Util/history";
import { Dentist } from "Util/icons";

type PropTypes = {
  header: typeof doctorListHeader;
  data: typeof DoctorDataList;
};

const DoctorTable = (props: PropTypes) => {
  return (
    <div className="w-full overflow-auto rounded-lg med-table-wrapper">
      <table className="table-auto med-table">
        <thead>
          <tr>
            {props.header.map((i, index) => {
              return <th key={index}>{i.col}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((i, index) => {
            return (
              <tr
                className={`border-gray-300 border-b hover:border-${i.Color} hover:bg-gray-100 cursor-pointer`}
                key={index}
                onDoubleClick={() => {
                  localStorage.setItem("SelectedDoctor", JSON.stringify(i));
                  history.push("/cadre/doctor/detail");
                }}
              >
                <td className="relative flex items-center">
                  <div
                    className={`rounded-full bg-${i.Color} mr-4 p-2 h-20 w-20 min-h-20 min-w-20 flex items-center justify-center text-white text-xl`}
                  >
                    {i.Name[0] + i.Surname[0]}
                  </div>
                  {`${i.Name} ${i.Surname}`}
                </td>
                <td>{i.Tc}</td>
                <td>{i.MobilePhone}</td>
                <td>{i.Email}</td>
                <td
                  className={` font-bold ${
                    i ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {i ? "Devam Ediyor" : "Devam Etmiyor"}
                </td>
                <td>
                  <Link
                    className="block w-12 h-12 text-gray-600 rounded-lg hover:text-med-500"
                    onClick={() => {
                      localStorage.setItem("SelectedDoctor", JSON.stringify(i));
                    }}
                    to={{
                      pathname: "/cadre/doctor/detail",
                      state: {
                        patient: i,
                      },
                    }}
                  >
                    <span className="block w-12 my-auto">{Dentist.More}</span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
