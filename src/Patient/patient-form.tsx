import React from "react";
import { patientSchema } from "Util/ValidationSchemas";
import { Formik, Form } from "formik";
import { patientForm } from "Util/form-fields";
import { patient, gender } from "Util/system";
import { Card } from "Card/card";
import Fields from "Forms/Elements/fields";
import { Radiobox } from "Forms/Elements/radiobox";
import { Checkbox } from "Forms/Elements/checkbox";

const initialValues = {
  name: "",
  surname: "",
  tc: "",
  gender: "",
  birthDate: "",
  mobilePhone: "",
  emergencyMobilePhone: "",
  email: "",
  canSendSms: false,
  documentNo: "",
  note: "",
  tag: "",
};

export const PatientForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={patientSchema}
      onSubmit={() => {}}
      render={(formikBag) => (
        <Form id="PatientFormSubmit">
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
            {/* <ColorPicker
                base={patientForm.color}
                options={colors}
                selectedOption={value => {
                  console.log("Parent-ColorPicker", value);
                }}
              /> */}

            {/* <DropDown
                options={this.props.allDiseasesList || diseases}
                base={patientForm.Diseases}
                touched={formikBag.touched.Diseases}
                errors={formikBag.errors.Diseases}
                values={formikBag.values.Diseases}
                onChange={setFieldValue}
                OnBlur={setFieldTouched}
              /> */}
          </Card>
          <Card base={patient.contact}>
            <Fields
              base={patientForm.mobilePhone}
              touched={formikBag.touched.mobilePhone}
              errors={formikBag.errors.mobilePhone}
              values={formikBag.values.mobilePhone}
            />
            <Fields
              base={patientForm.emergencyMobilePhone}
              touched={formikBag.touched.emergencyMobilePhone}
              errors={formikBag.errors.emergencyMobilePhone}
              values={formikBag.values.emergencyMobilePhone}
            />
            <Fields
              base={patientForm.email}
              touched={formikBag.touched.email}
              errors={formikBag.errors.email}
              values={formikBag.values.email}
            />
            <Checkbox
              touched={formikBag.touched.canSendSms}
              errors={formikBag.errors.canSendSms}
              values={formikBag.values.canSendSms}
              base={patientForm.canSendSms}
            />
          </Card>
          <Card base={patient.process}>
            <Fields
              base={patientForm.documentNo}
              touched={formikBag.touched.documentNo}
              errors={formikBag.errors.documentNo}
              values={formikBag.values.documentNo}
            />
            <Fields
              touched={formikBag.touched.tag}
              errors={formikBag.errors.tag}
              values={formikBag.values.tag}
              base={patientForm.tag}
            />
            <Fields
              base={patientForm.note}
              touched={formikBag.touched.note}
              errors={formikBag.errors.note}
              values={formikBag.values.note}
            />
          </Card>
          {/* <button
              type="button"
              className="p-4 bg-red-500"
              onClick={handleReset}
              disabled={!dirty}
            >
              Sifirla
            </button> */}
          {/* <button
              onClick={() => console.log("hasta", values)}
              type="submit"
              className="px-12 py-4 font-medium bg-red-300 rounded"
            >
              Kaydet
            </button> */}
        </Form>
      )}
    />
  );
};
