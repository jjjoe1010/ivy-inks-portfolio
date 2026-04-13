import Container from "../../components/Container"
import Carousel from "../../components/Carousel"

let slides = [
    "assets/bee.jpg",
    "assets/fireWood.jpg",
    "assets/fish.jpg"
]



export default function Gallery() {
    return(
    <main>
            <Container>
                <div className="space-y-10 bg-white py-10">
                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                    <h1 className="pb-8 text-4xl">
                        This is my gallery for my work &lt;3
                    </h1>
                    <img className="relative w-screen " src="assets/sarah-about-picture.jpg" alt="404 Not Found"/>
                    </section>  
                    <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                        <h1 className="pb-8 text-4xl">
                            Past flash sheets &lt;3
                        </h1>
                        <div className="" >
                            <img className="relative w-screen " src="assets/ponyoAndPumpkin.jpg" alt="404 Not Found"/>
                        </div>
                    </section>
                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                        <h1 className="pb-8 text-4xl">
                            Fresh tattoo &lt;3
                        </h1>
                        <div>
                            <div className="flex space-x-4 overflow-hidden" >
                                <img className="relative w-screen " src="assets/fish.jpg" alt="404 Not Found"/>
                            </div>
                            <div className="flex absalute top-0 w-full justify-between items-center">
                                <button className="bg-gray-400 rounded-xl text-3xl" > &lt; </button>
                                <button className="bg-gray-400 rounded-xl text-3xl" > &gt; </button>
                            </div>                     
                        </div>
                    </section>
                    <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                        <h1 className="pb-8 text-4xl">
                            Healed tattoo with review
                        </h1>
                        <div>
                            <img className="relative w-screen " src="assets/ponyoAndPumpkin.jpg" alt="404 Not Found"/>
                        </div>
                    </section>
                    <section>
                        <div className="mb:w-230 m-auto">
                            <Carousel slides={slides}/>
                        </div>   
                    </section>
                </div>
            </Container>
        </main>
    )
}
