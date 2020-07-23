import React from "react";
import { Formik, Form } from "formik";
import { patientSchema } from "Util/ValidationSchemas";
import { Card } from "Card/card";
import Fields from "Forms/Elements/fields";
import { patient, gender, color } from "Util/system";
import { patientForm } from "Util/form-fields";
import { Radiobox } from "Forms/Elements/radiobox";
import { ColorPicker } from "Forms/Elements/color-picker";

const initialValues = {
  name: "",
  surname: "",
  tc: "",
  gender: "",
  birthDate: "",
  mobilePhone: "",
  email: "",
  canSendSms: false,
  color: "gray-800",
  userLevel: "Doctor",
  DepartmentCode: "",
};

export const DoctorForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={patientSchema}
      onSubmit={() => {}}
      render={(formikBag) => {
        return (
          <Form id="DoctorFormSubmit">
            <Card base={patient.identity}>
              <Fields
                base={patientForm.name}
                touched={formikBag.touched.name}
                errors={formikBag.errors.name}
                values={formikBag.values.name}
              />
              <Fields
                base={patientForm.surname}
                touched={formikBag.touched.surname}
                errors={formikBag.errors.surname}
                values={formikBag.values.surname}
              />
              <Fields
                base={patientForm.tc}
                touched={formikBag.touched.tc}
                errors={formikBag.errors.tc}
                values={formikBag.values.tc}
              />
              <Radiobox
                touched={formikBag.touched.gender}
                errors={formikBag.errors.gender}
                values={formikBag.values.gender}
                options={gender}
                base={patientForm.gender}
              />
              <Fields
                base={patientForm.birthDate}
                touched={formikBag.touched.birthDate}
                errors={formikBag.errors.birthDate}
                values={formikBag.values.birthDate}
              />
            </Card>
            <Card base={patient.contact}>
              <Fields
                base={patientForm.mobilePhone}
                touched={formikBag.touched.mobilePhone}
                errors={formikBag.errors.mobilePhone}
                values={formikBag.values.mobilePhone}
              />
              <Fields
                base={patientForm.email}
                touched={formikBag.touched.email}
                errors={formikBag.errors.email}
                values={formikBag.values.email}
              />
              <ColorPicker
                base={patientForm.color}
                options={color}
                touched={formikBag.touched.color}
                errors={formikBag.errors.color}
                values={formikBag.values.color}
              />
            </Card>
          </Form>
        );
      }}
    />
  );
};
