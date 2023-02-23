import React, { forwardRef, useRef } from "react";

export default function ForwardForm() {
  const InputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(InputRef.current.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MyInput ref={InputRef} />
        <button>Submit</button>
      </form>
    </div>
  );
}

const MyInput = forwardRef(function MyInput(props, ref) {
  return <input type="text" {...props} ref={ref} />;
});
