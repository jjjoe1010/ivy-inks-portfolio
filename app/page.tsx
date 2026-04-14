import Image from "next/image";
import Container from "../components/Container"

export default function Home() {
  return (
      <main>
        <Container>
          <div className="space-y-10 bg-white py-10">
            
            <section>
              <img className="rounded-4xl min-h-130 aspect" src= "/assets/sarahPortrait/sarah-about-picture.jpg" alt="404 Not Found"/>
            </section>

            <section className="flex items-center w-full bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 min-h-150">
              <div className=" w-full space-y-7 text-3xl font-medium text-center">
                <p >
                  Hello~!💛✨<br/>
                  I'm Sarah, welcome to my page!<br/>
                </p>
                <p>
                  Here you can see my work and see if my style matches yours 😎
                </p>
                <p>
                  if youre interested, shoot me a message on facebook or Instagram 📝and we can discus what you want 💛
                </p>
                <p>
                  other words, please enjoy my page ✨
                </p> 
              </div>
            </section>

            <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
              <h1 className="pb-8 text-4xl">
                Flash sheet 
              </h1>
              <img className="relative w-screen " src="/assets/flashSheet/flash-sheet.jpg" alt="404 Not Found"/>
            </section>

            <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 min-h-150">
              <h1 className="pb-8 text-4xl">
                Where am I?
              </h1>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9325605024906!2d-1.3033471224006963!3d53.128283891015926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487996a91aa1d729%3A0xb984b304e59f1729!2sEternity%20ltd!5e1!3m2!1sen!2suk!4v1775777707549!5m2!1sen!2suk"
                  width="100%"
                  height="250px"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eternity ltd tattoo shop location on Google Maps"
                  className="rounded-2xl pb-8"
                />
                <p className="text-3xl">
                  Address:
                </p>
                <p className="text-2xl">
                  Eternity tattoo studio<br/>
                  Sutton Rd, Huthwaite<br/>
                  Sutton-in-Ashfield<br/>
                  NG17 2LA
                </p>
                <h1 className="text-3xl">
                  Opening time:
                </h1>
                  <div className="grid grid-cols-2 content-start text-2xl">
                    <div>
                      <p>
                        Sun - Mon
                      </p>
                      <p>
                        Tue - Fri
                      </p>                
                    </div>
                    <div>
                      <p>
                        Close
                      </p>
                      <p>
                        10am - 5pm
                      </p>
                    </div>                
                  </div> 
            </section>

          </div>
        </Container>
      </main>
  );
}
// []
