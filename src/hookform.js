import React from "react";
import { useForm } from "react-hook-form";

function Hookform() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <input {...register("email", { required: true, minLength: 6 })} />
      <input {...register("password")} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Hookform;
