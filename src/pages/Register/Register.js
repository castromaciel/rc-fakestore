import { useForm } from "react-hook-form";
import RequiredError from "../../components/FieldErrors/FieldErrors";

const Register = () => {
  const { register, handleSubmit, formState } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="form-page text-white" >
      <h1>Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="username" {...register("username", { required: true, minLength: 3, maxLength: 10 } ) } />
        { formState.errors.username?.type === 'required' && <RequiredError /> } 

        {/* include validation with required or other standard HTML validation rules */}
        <input placeholder="example@example.com" {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {formState.errors.email && <RequiredError />}

        <input type='number' placeholder="edad" {...register('age', { required: true, min: 18 } )} />
        { formState.errors.age?.type === 'required' && <RequiredError /> }
        { formState.errors.age && <span>La edad minima es de 18 años</span> }

        <input type="submit" />
      </form>
    </div>
  );
}

export default Register