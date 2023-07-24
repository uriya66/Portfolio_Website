import React, { useRef, useState } from "react";
import { motion, transform } from "framer-motion";
// this is a tool to add the functionality to contact form to send emails
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { phone, linkedin, whatsapp, githubIcon } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  //
  const [loading, setLoading] = useState(false);

  // update the fields and enter name, email, message
  const handleChange = (event) => {
    // extract the target from the event
    const { target } = event;
    // extract the name and the vaule from the target
    const { name, value } = target;

    setForm({
      // spread the entire form
      ...form,
      // update the name to the newly value
      [name]: value,
    });
  };

  //
  const handleSubmit = (e) => {
    // first prevent default because otherwise the browser would refresh
    e.preventDefault();
    setLoading(true);

    // emailjs library
    emailjs
      .send(
        // service ID
        "service_gjpvilf",
        // tamplate ID
        "template_s872fps",
        // provide an object with some options
        {
          from_name: form.name,
          to_name: "Uriya",
          from_email: form.email,
          to_email: "uriya66@gmail.com",
          message: form.message,
        },
        // public key
        "k1tqq7uTr_jrsXaf7"
      )
      // that then is going to accept one callback function
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          // reset the form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        // provide another callback function - Error
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        // the contact box animate slides in from the left
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {/* label name  */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          {/* label email  */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          {/* label message  */}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {/* if loading say "Sending..."  */}
            {loading ? "Sending..." : "Send"}
          </button>

          <div className="flex space-x-4 absolute bottom-5 right-7 h-16 ">
            {/* phone */}
            <a href="tel:052-595-4399" target="_blank" rel="noreferrer">
              <img
                src={phone}
                alt={"phone"}
                className="w-[80%] h-[90%] object-contain"
              />
            </a>
            {/* whatsapp */}
            <a
              // https://wa.link/u08flk - without message
              href="https://wa.link/jvv915"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsapp}
                alt={"whatsapp"}
                className="w-[90%] h-[90%] object-contain"
              />
            </a>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/uriyaaz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt={"linkedin"}
                className="w-[90%] h-[90%] object-contain"
              />
            </a>
            {/* github */}
            <a
              href="https://github.com/uriya66"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubIcon}
                alt={"github"}
                className="w-[90%] h-[90%] object-contain"
              />
            </a>
          </div>
        </form>
      </motion.div>

      <motion.div
        // the earth animate slides in from the left
        variants={slideIn("right", "tween", 0.2, 1)}
        // xl - extra large devices / md - medium devices
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      {/* 
      <motion.div
        // the contact box animate slides in from the left
        variants={slideIn("down", "tween", 0.2, 1)}
        className="absolute bottom-16 right-12 h-20 w-5/12 ... bg-black-100 p-8 rounded-2xl"
      >

      </motion.div> */}
    </div>
  );
};

// wrap the export default Contact with the SectionWrapper - (Contact - component, "contact" - idName)
export default SectionWrapper(Contact, "contact");
