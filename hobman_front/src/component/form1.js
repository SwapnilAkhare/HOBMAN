import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function Location() {
    const formik = useFormik({
      initialValues: {
        state: '',
        city: '',
        check_in_date: '',
        check_out_date: '',
      },
      validationSchema: yup.object({
        state: yup.string()

           .min(3, 'code should be 3 digit')

           .required('Please Enter state Name'),

        city: yup.string()

           .max(20, 'city Name should not exceed 20 Characters')

           .required('Please Enter city Name'),

        check_in_date: yup.string()
           .required('Please Enter check in date'),

        check_out_date: yup.string()

           .required('Please Enter check out date'),
     }),
     onSubmit: values => {

        alert(JSON.stringify(values));
     },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
  
        <p>
          <label>Select state</label>
          <br></br>
          <select>
        <option value="" label="Select a state" />
        <option value="maharashtra" label="Maharashtra" />
        <option value="Goa" label="Goa" />
      </select>
        </p>
        <p>
          <label>Select city</label>
          <br></br>
          <select>
        <option value="" label="Select a state" />
        <option value="Jalgaon" label="Jalgaon" />
      </select>
        </p>
        <p>
          <label>Check-in-date<br></br><input type="date" name="check_in_date"
            value={formik.values.check_in_date}
            onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.check_in_date && formik.errors.check_in_date ? 
            <span style={{ color: 'red' }}>{formik.errors.check_in_date}</span> : null}</label>
        </p>
        <p>
          <label>Check-out-date<br></br><input type="date" name="check_out_date"
            value={formik.values.check_out_date}
            onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
            {formik.touched.check_out_date && formik.errors.check_out_date ?
             <span style={{ color: 'red' }}>{formik.errors.check_out_date}</span> : null}</label>
        </p>
        <button type="submit">SUBMIT</button>
      </form>
    )
  }

  export default Location;