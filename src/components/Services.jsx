import Section from "./Section";
import Heading from "./Heading";
import { check } from "../assets"; 
import { brainwaveServices, brainwaveServicesIcons } from "../constants"; 
import Rapper1 from '../assets/rapper1.jpg' 
import Rapper2 from '../assets/rapper2.webp'
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import Generating from "./Generating";
import Service from '../assets/services.webp';

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Outsource Smarter, Grow Faster"
          text="Streamline your operations with our tailored BPO solutions, designed to reduce costs, improve efficiency, and help your business scale globally."
        />

        <div className="relative">
          <div className="relative z-1   flex items-center h-[39rem] mb-5 p-8 border border-n-1/30 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right filter brightness-[30%]"
                width={800}
                alt="BPO Services"
                height={730}
                src="https://res.cloudinary.com/diml90c1y/image/upload/v1756963949/customer-service-representatives-working-office-1-1920x1080_h8om9y.jpg"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Strategic Outsourcing</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Empower your business with reliable, scalable, and cost-effective outsourcing solutions.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1756964332/india-office-office-workers-people-working-young-crowd-in-office-5207408_urrqso.jpg"
                  className="h-full  filter brightness-[60%] w-full object-cover"
                  width={630}
                  height={750}
                  alt="BPO Team"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Customer Support</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Delivering 24/7 customer service excellence with multilingual and personalized support.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 rounded-3xl bg-gradient-to-b from-n-8/0 to-n-8/90 border-2   border-purple-500  overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 z-50 xl:px-8">
                <h4 className="h4 mb-4">Back-Office Solutions</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  From data entry to finance and HR, we manage your operations so you can focus on growth.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src="https://res.cloudinary.com/diml90c1y/image/upload/v1753588978/freepik__the-style-is-candid-image-photography-with-natural__86159_aslgid.png"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Outsourcing Team"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
