import Container from "../../components/Container"
import Carousel from "../../components/Carousel"

let flashSheet = [
    "assets/flashSheet/cuteAnimals.jpeg",
    "assets/flashSheet/flowers1.jpeg",
    "assets/flashSheet/flowers2.jpeg",
]
let freshTattoo = [
    "assets/freashTattoo/bee.jpg",
    "assets/freashTattoo/fireWood.jpg",
    "assets/freashTattoo/fish.jpg"
]

let healedTattoo = [
    "assets/healedTattoo/ladybug.jpeg",
    "assets/healedTattoo/moth.jpeg"
] 

export default function Gallery() {
    return(
    <main>
            <Container>
                <div className="space-y-10 bg-white py-10">
                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-100">
                    <h1 className="pb-8 text-4xl">
                        This is my gallery for my work &lt;3
                    </h1>
                    <img className="relative w-screen " src="assets/sarahPortrait/sarah-about-picture.jpg" alt="404 Not Found"/>
                    </section>  
                    <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
                        <h1 className="pb-8 text-4xl">
                            Past flash sheets &lt;3
                        </h1>
                        <div className="mb:w-230 m-auto">
                            <Carousel slides={flashSheet}/>
                        </div>
                    </section>
                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
                        <h1 className="pb-8 text-4xl">
                            Fresh tattoo &lt;3
                        </h1>
                        <div className="mb:w-230 m-auto">
                            <Carousel slides={freshTattoo}/>
                        </div>
                    </section>
                    <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
                        <h1 className="pb-8 text-4xl">
                            Healed tattoo with review
                        </h1>
                        <div className="mb:w-230 m-auto">
                            <Carousel slides={healedTattoo}/>
                        </div>
                    </section>
                </div>
            </Container>
        </main>
    )
}
