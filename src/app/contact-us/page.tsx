import { Toaster } from "react-hot-toast";

import { BreadCrumbs, ContactForm, Container, Typography } from "@/components";

const ContactUsPage = () => (
  <main>
    <Container className="pb-[100px] pt-[20px]">
      <Toaster />
      <BreadCrumbs />
      <Typography tag="h1" variant="title-2">
        Contact Us
      </Typography>
      <div className="flex flex-col justify-between gap-3 tablet:flex-row">
        <div>
          <p className="mb-5">
            We love hearing from you, our Shop customers. Please contact us and we will make sure to
            get back to you as soon as we possibly can.
          </p>
          <ContactForm />
        </div>
        <div>Adress section</div>
      </div>
    </Container>
  </main>
);

export default ContactUsPage;
