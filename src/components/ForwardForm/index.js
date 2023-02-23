import React, { forwardRef, useRef, useImperativeHandle } from "react";

export default function ForwardForm() {
  const ref = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const value = ref.current.focus();
    console.log(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <MyInput name="text" type="text" ref={ref} />
        <button>Submit</button>
      </form>
    </div>
  );
}

const MyInput = forwardRef(function MyInput(props, ref) {
  const InputRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          return InputRef.current.value;
        },
      };
    },
    []
  );

  return <input {...props} ref={InputRef} />;
});
