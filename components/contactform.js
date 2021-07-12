import * as React from "react";
import { FormspreeProvider, useForm, ValidationError } from "@formspree/react";
import formStyles from "../styles/form.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("contact");
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className={formStyles.container}>
      <label htmlFor="email">Your email:</label>
      <input id="email" type="email" name="email" className={formStyles.inputs} />
      <ValidationError prefix="Email" field="email" errors={state.errors} className={formStyles.errors} />
      <label htmlFor="message">Your message:</label>
      <textarea 
        id="message" 
        name="message"
        className={`${formStyles.inputs} ${formStyles.textarea}`}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} className={formStyles.errors} />
      <button type="submit" disabled={state.submitting} className={`${formStyles.inputs} ${formStyles.button}`}>
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
