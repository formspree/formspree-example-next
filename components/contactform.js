import * as React from "react";
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";

// Some nice boilerplate CSS to tidy up your form
const form = {
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gridGap: "1rem",
  textAlign: "left",
  padding: "2rem 0"
};
const formInputs = {
  fontFamily: "inherit",
  fontSize: "inherit",
  border: "1px solid currentColor",
  background: "none",
  padding: "0.4rem 0.5rem",
  margin: 0
};
const formTextarea = {
  ...formInputs,
  resize: "vertical"
};
const formButton = {
  ...formInputs,
  justifySelf: "start"
};

function ContactForm() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <form onSubmit={handleSubmit} style={form}>
      <label htmlFor="email">Your email:</label>
      <input id="email" type="email" name="email" style={formInputs} />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Your message:</label>
      <textarea id="message" name="message" style={formTextarea} />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} style={formButton}>
        Send
      </button>
    </form>
  );
}

function Form() {
  return (
    <FormspreeProvider project="1615048538327089110">
      <ContactForm />
    </FormspreeProvider>
  );
}
export default Form;
