import { useForm } from "react-hook-form";

function App() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="h-screen w-full flex">
      <div className="border border-stone-400 rounded p-4 m-auto w-96">
        <h1 className="text-3xl font-bold mb-4">Registration Form</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name",{
              required: {
              value: true,
              message: "Name is required",
            },
            minLength: {
              value: 5,
              message: "Name must be at least 5 characters",
            }})}
            className="block border border-stone-400 w-full rounded py-1 px-2 mb-3 focus:shadow-lg focus:shadow-stone-500 focus:outline-0"
          />
          <button
            type="submit"
            className="px-4 py2 rounded bg-blue-600 text-white cursor-pointer  hover:shadow-lg hover:shadow-stone-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
