"use client"
import { ContactForm } from "@/components/SubPages/contact";
import { useLocalization } from "@/hooks/LocalizationProvider";
import React from "react";

const ContactPage = () => {
  const {content:{pages}} =useLocalization()
  return (
    <div className="container">
      <h1>{pages.contact.header}</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;