import React from 'react';

const Input = (props) => {
  const changeHandler = (event) => {
    if (props.name === "title") {
      const currentText = event.target.value;
      props.onChange((oldText) =>
        currentText.length <= 50 ? currentText : oldText
      );
    } else {
      props.onChange(event.target.value);
    }
  };

  return (
    <>
      {props.type === "textarea" ? (
        <textarea
          {...props}
          className="note-input__body"
          value={props.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      ) : (
        <input
          {...props}
          className="note-input__title"
          value={props.value}
          spellCheck={false}
          onChange={changeHandler}
        />
      )}
    </>
  );
};

export default Input;
