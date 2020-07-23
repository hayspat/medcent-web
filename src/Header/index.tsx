import React from "react";
import { CardWrapper } from "Card/card-wrapper";
import { history } from "Util/history";

export const HeaderWrapper: React.FC = (props) => {
  return (
    <CardWrapper>
      <div className="flex items-center w-full h-16 px-4">{props.children}</div>
    </CardWrapper>
  );
};

// Patient------------------------------------------------------------

export const HeaderPatientList: React.FC = () => {
  return (
    <HeaderWrapper>
      <h2 className="justify-between text-2xl font-bold leading-none">
        Hastalar
      </h2>
      <button
        className="ml-auto btn-style-1 "
        onClick={() => history.push("/patient/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};

export const HeaderPatientDetails = (props: {
  patients: { name: string; surname: string };
  children?: React.ReactNode;
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none text-med-500">
        >
      </span>
      <h2 className="justify-between text-2xl font-bold leading-none">
        {`${props.patients.name} ${props.patients.surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderPatientEdit = (props: {
  patients: { name: string; surname: string };
  children?: React.ReactNode;
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/patient/detail")}
      >
        {`${props.patients.name} ${props.patients.surname}`}
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none " />
      <h2 className="justify-between text-2xl font-bold leading-none">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="PatientFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

export const HeaderPatientNew: React.FC = (props) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/patient")}
      >
        Hastalar
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2 className="justify-between text-2xl font-bold leading-none">
        Yeni Hasta Ekle
      </h2>
      <button
        type="submit"
        form="PatientFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Technician------------------------------------------------------------

export const HeaderTechnicianDetails = (props: {
  technician: { name: string; surname: string };
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2 className="justify-between text-2xl font-bold leading-none">
        {`${props.technician.name} ${props.technician.surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianEdit = (props: {
  technician: { name: string; surname: string };
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/lab/technician/detail")}
      >
        {`${props.technician.name} ${props.technician.surname}`}
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none " />
      <h2 className="justify-between text-2xl font-bold leading-none">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianList: React.FC = () => {
  return (
    <HeaderWrapper>
      <h2 className="justify-between text-2xl font-bold leading-none">
        Teknisyenler
      </h2>
      <button
        className="ml-auto btn-style-1 "
        onClick={() => history.push("/lab/technician/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
export const HeaderTechnicianNew: React.FC = () => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/lab/technician")}
      >
        Teknisyenler
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2 className="justify-between text-2xl font-bold leading-none">
        Yeni Teknisyen Ekle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Doctor------------------------------------------------------------

export const HeaderDoctorList: React.FC = () => {
  return (
    <HeaderWrapper>
      <h2 className="justify-between text-2xl font-bold leading-none">
        Doktorlar
      </h2>
      <button
        className="ml-auto btn-style-1 "
        onClick={() => history.push("/cadre/doctor/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
export const HeaderDoctorDetail = (props: {
  doctor: { name: string; surname: string };
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/cadre/doctor")}
      >
        Doktorlar
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2 className="justify-between text-2xl font-bold leading-none">
        {`${props.doctor.name} ${props.doctor.surname}`}
      </h2>
    </HeaderWrapper>
  );
};
export const HeaderDoctorEdit = (props: {
  doctor: { name: string; surname: string };
}) => {
  return (
    <HeaderWrapper>
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/cadre/doctor")}
      >
        Doktorlar
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none" />
      <h2
        className="justify-between text-2xl font-bold leading-none cursor-pointer text-med-500"
        onClick={() => history.push("/cadre/doctor/detail")}
      >
        {`${props.doctor.name} ${props.doctor.surname}`}
      </h2>
      <span className="mx-2 text-2xl font-bold leading-none " />
      <h2 className="justify-between text-2xl font-bold leading-none">
        Bilgileri Düzenle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};
export const HeaderDoctorNew = () => {
  return (
    <HeaderWrapper>
      <h2 className="justify-between text-2xl font-bold leading-none">
        Yeni Doktor Ekle
      </h2>
      <button
        type="submit"
        form="DoctorFormSubmit"
        className="ml-auto btn-style-1 "
      >
        Kaydet
      </button>
    </HeaderWrapper>
  );
};

// Setting > Services------------------------------------------------------------

export const HeaderServicesList = () => {
  return (
    <HeaderWrapper>
      <h2 className="justify-between text-2xl font-bold leading-none">
        Hizmetler
      </h2>
      <button
        className="ml-auto btn-style-1 "
        onClick={() => history.push("/settings/services/new")}
      >
        Yeni Ekle
      </button>
    </HeaderWrapper>
  );
};
