import React from "react";
import { Link } from "react-router-dom";
import { patientListHeader } from "Util/table-cols";
import { patientDataList } from "Patient/mock-data";
import { history } from "Util/history";
import { Dentist } from "Util/icons";

type PropTypes = {
  header: typeof patientListHeader;
  data: typeof patientDataList;
};

const PatientTable = (props: PropTypes) => {
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
                className={`border-gray-300 border-b hover:border-med-500 hover:bg-gray-100 cursor-pointer`}
                key={index}
                onDoubleClick={() => {
                  localStorage.setItem("SelectedPatient", JSON.stringify(i));
                  history.push("/patient/detail");
                }}
              >
                <td className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 p-2 mr-4 text-gray-800 bg-gray-300 rounded-full min-h-12 min-w-12">
                    {i.Name[0] + i.Surname[0]}
                  </div>
                  {`${i.Name} ${i.Surname}`}
                </td>
                <td>""</td>
                <td>{i.Tc}</td>
                <td>{i.MobilePhone}</td>
                <td>{i.Email}</td>
                <td
                  className={` font-bold ${
                    parseInt(i.Balance, 10) < 0 ? "text-red-500" : " "
                  }`}
                >
                  {i.Balance} TL
                </td>
                <td>
                  <Link
                    className="block w-12 h-12 text-gray-600 rounded-lg hover:text-med-500"
                    onClick={() => {
                      localStorage.setItem(
                        "SelectedPatient",
                        JSON.stringify(i)
                      );
                    }}
                    to={{
                      pathname: "/patient/detail",
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

export default PatientTable;
