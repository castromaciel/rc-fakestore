import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RequiredError from "../../components/FieldErrors/FieldErrors";
import './register.css';

const Register = () => {
  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const datum = await response.json()
      console.log(datum)
      
      if(datum?.errors) {

        toast(datum.errors[0].msg, {
          theme: 'dark'
        })

      } else {
        toast(datum.message)
      }

    } catch (error) {
      toast('Falla al realizar el registro')
    }
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="form-page text-white" >
      <ToastContainer />
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" {...register("username", { minLength: 3, maxLength: 10, required: true } ) } />
        { formState.errors.username?.type === 'required' && <RequiredError /> } 

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="example@example.com" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {formState.errors.email && <RequiredError />}
        <input placeholder="password" type="password" maxLength={12} {...register("password", { required: true, minLength: 8 })} />
        {/* errors will return when field validation fails  */}
        {formState.errors.password && <RequiredError />}

        <input
          type='number'
          placeholder="edad"
          pattern=""
          {...register('age', {
            min: 18,
            required: true,
            max: 25,
            })
          }
        />

        { formState.errors.age?.type === 'min' && <span>La edad minima es de 18 años</span> }
        { formState.errors.age?.type === 'required' && <RequiredError /> }
        { formState.errors.age?.type === 'max' && <span>La edad maxima es de 25 años</span> }

        <input type="submit" />
      </form>
    </div>
  );
}

export default Register
