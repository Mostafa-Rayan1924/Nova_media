"use client";
import Link from "next/link";
import SquareIcon from "../reusable/SquareIcon";
import CircleIcon from "../reusable/CircleIcon";
import { socialLinks } from "../constants/SocialLinks";
import { motion } from "framer-motion";
import { useState } from "react";
const ContactSec = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    //id mgvezoaa
    try {
      const response = await fetch("https://formspree.io/f/mgvezoaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="container grid grid-cols-1 relative  md:grid-cols-2 gap-4">
      <div className="absolute left-0 lg:-left-40 w-[150px] h-[150px] sm:w-[320px] sm:h-[320px]    opacity-20 blur-3xl  rounded-full bg-gradient-to-r from-primary to-transparent -z-20 -bottom-20 " />

      <SquareIcon
        y={"-top-14 md:-top-5"}
        x={"left-4 sm:left-0"}
        color={"primary"}
      />
      <CircleIcon
        y={"-bottom-20"}
        x={"right-4 md:right-0"}
        color={"blue-500"}
      />
      {/* map */}
      <motion.iframe
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full h-[350px] sm:size-full rounded-lg object-cover"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.3729691913036!2d32.27196800000001!3d30.595241599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f859007470d085%3A0xc7f3dbf8249e5bca!2z2LTYsdmD2Kkg2YbZiNmB2Kcg2YXZitiv2YrYpyDZhNmE2K7Yr9mF2KfYqiDYp9mE2KfYudmE2KfZhtmK2Kkg2YjYp9mE2LfYqNin2LnYqSDYp9mE2LHZgtmF2YrYqQ!5e0!3m2!1sar!2seg!4v1731935039981!5m2!1sar!2seg"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></motion.iframe>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex gap-6 md:gap-2 md:flex-row h-full flex-col items-center ">
        <div className="flex-1 text-end w-full">
          <div className="mx-auto max-w-screen-xl      sm:px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="mb-0 w-full space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  الاسم بالكامل
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 focus:border-primary outline-none border-border p-4 pe-12 text-sm shadow-sm"
                  placeholder="الاسم بالكامل"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  الإيميل
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border-2 focus:border-primary outline-none border-border p-4 pe-12 text-sm shadow-sm"
                  placeholder="الإيميل"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[150px] resize-none rounded-lg border-2 focus:border-primary outline-none border-border p-4 pe-12 text-sm shadow-sm"
                  placeholder="ادخل رسالتك"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-2xl py-2 text-white bg-primary rounded-lg hover:bg-primary/90"
                disabled={status === "submitting"}>
                {status === "submitting"
                  ? "جارٍ الإرسال..."
                  : status === "success"
                  ? "تم الإرسال بنجاح!"
                  : "أرسل"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-center">
                  حدث خطأ أثناء الإرسال!
                </p>
              )}
            </form>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center md:flex-col gap-2">
          {socialLinks.map((item, index) => {
            return (
              <Link
                href={item.path}
                target="_blank"
                key={index}
                className="flex items-center group icon transition-all duration-300 hover:text-white justify-center gap-2 bg-accent size-12  hover:bg-[#1da1f2] rounded-lg ">
                {item.icon}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSec;
