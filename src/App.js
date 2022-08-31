import { Formik, Form, Field } from "formik";


const App =()=> {

  return (
    <div>
      <headers>
        <Formik
          initialValues={{ search:'' }}
          onSubmit={ async values => {
            // llamar a la api de unsplash
            console.log(values)
          }}
        >
          <Form>
            <Field name='search'/>
          </Form>
        </Formik>
      </headers>``
    </div> 
  );
}

export default App;
