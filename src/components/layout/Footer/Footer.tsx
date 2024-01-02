import Link from "next/link";

import { PaymentMethods, Socials, SubscribeForm } from "@/components/common";
import { AccordionItem } from "@/components/common/Accordion/AccordionItem/AccordionItem";
import { Container } from "@/components/ui";

const footerLinks = [
  {
    label: "Information",
    links: [
      {
        title: "About Us",
        link: "/"
      },
      {
        title: "About Zip",
        link: "/"
      },
      {
        title: "Search",
        link: "/"
      },
      {
        title: "Terms",
        link: "/"
      },
      {
        title: "Orders and Returns",
        link: "/"
      },
      {
        title: "Contact Us",
        link: "/"
      },
      {
        title: "Advanced Search",
        link: "/"
      },

      {
        title: "Newsletter Subscription",
        link: "/"
      }
    ]
  },
  {
    label: "PC Parts",
    links: [
      {
        title: "CPUS",
        link: "/"
      },
      {
        title: "Add On Cards",
        link: "/"
      },
      {
        title: "Hard Drives (Internal)",
        link: "/"
      },
      {
        title: "Graphic Cards",
        link: "/"
      },
      {
        title: "Keyboards / Mice",
        link: "/"
      },
      {
        title: "Cases / Power Supplies / Cooling",
        link: "/"
      },
      {
        title: "RAM (Memory)",
        link: "/"
      },
      {
        title: "Software",
        link: "/"
      },
      {
        title: "Speakers / Headsets",
        link: "/"
      },
      {
        title: "Motherboards",
        link: "/"
      }
    ]
  },
  {
    label: "Desktop PCs",
    links: [
      {
        title: "Custom PCs",
        link: "/"
      },
      {
        title: "Servers",
        link: "/"
      },
      {
        title: "MSI All-In-One PCs",
        link: "/"
      },
      {
        title: "HP/Compaq PCs",
        link: "/"
      },
      {
        title: "ASUS PCs",
        link: "/"
      },
      {
        title: "Tecs PCs",
        link: "/"
      }
    ]
  },
  {
    label: "Laptops",
    links: [
      {
        title: "Evryday Use Notebooks",
        link: "/"
      },
      {
        title: "MSI Workstation Series",
        link: "/"
      },
      {
        title: "MSI Prestige Series",
        link: "/"
      },
      {
        title: "Tablets and Pads",
        link: "/"
      },
      {
        title: "Netbooks",
        link: "/"
      },
      {
        title: "Infinity Gaming Notebooks",
        link: "/"
      }
    ]
  },
  {
    label: "Adress",
    links: [
      {
        title: "Address: 1234 Street Adress City Address, 1234",
        link: "/"
      },
      {
        title: "Phone: (00) 1234 5678",
        link: "/"
      },
      {
        title: "E-mail: shop@email.com",
        link: "/"
      }
    ]
  }
];

const paymentItems = [
  {
    label: "paypal",
    img: "/img/payment-methods/paypal.png"
  },
  {
    label: "visa",
    img: "/img/payment-methods/visa.png"
  },
  {
    label: "maestro",
    img: "/img/payment-methods/maestro.png"
  },
  {
    label: "discover",
    img: "/img/payment-methods/discover.png"
  },
  {
    label: "american-express",
    img: "/img/payment-methods/american-express.png"
  }
];

export const Footer = () => (
  <footer className=" bg-black pt-[50px] text-white">
    <Container className="divide-[#353535] tablet:divide-y-[1px]">
      <div>
        <SubscribeForm
          className="mb-[15px] tablet:mb-[45px] "
          subTitle="Be the first to hear about the latest offers."
          title="Sign Up To Our Newsletter."
        />
        <div className="mb-[15px] grid gap-x-4 gap-y-3 tablet:grid-flow-col">
          {footerLinks.map((footerLinksGroups, index) => (
            <div key={index}>
              <div className="hidden tablet:block">
                <h5 className="mb-3 text-[14px] font-bold text-gray-500">
                  {footerLinksGroups.label}
                </h5>
                <ul className="text-[13px]">
                  {footerLinksGroups.links.map((link, index) => (
                    <li key={index}>
                      <Link className="hover:underline" href={link.link}>
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block tablet:hidden">
                <AccordionItem
                  key={index}
                  bodyClassName="pl-2"
                  title={footerLinksGroups.label}
                  body={
                    <ul className="flex flex-col gap-2 pb-3 text-[12px] font-light">
                      {footerLinksGroups.links.map((link, index) => (
                        <li key={index}>
                          <Link className="hover:underline" href={link.link}>
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-[auto_auto] gap-4 py-5 text-[12px] font-medium text-dark-gray tablet:grid-cols-3">
        <Socials className="order-1" />
        <PaymentMethods
          className="order-3 col-span-2 tablet:order-2 tablet:col-span-1"
          paymentItems={paymentItems}
        />
        <div className="order-2  text-right tablet:order-3">Copyright © 2020 Shop Pty. Ltd.</div>
      </div>
    </Container>
  </footer>
);
