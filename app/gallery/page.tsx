import Container from "../../components/Container"
import Carousel from "../../components/Carousel"

//check if the photoes are the same width, 
//if not the image will bleed into the following slides.

let flashSheet = [
    "assets/flashSheet/cuteAnimals.jpeg",
    "assets/flashSheet/flowers1.jpeg",
    "assets/flashSheet/flowers2.jpeg",
    "assets/flashSheet/gamesIcon1.jpeg",
    "assets/flashSheet/gamesIcon2.jpeg",
]
let freshTattoo = [
    "assets/freshTattoo/fireWood.jpg",
    "assets/freshTattoo/fish.jpg",
    "assets/freshTattoo/mushroom.jpeg",
    "assets/freshTattoo/orange.jpeg",

]

let healedTattoo = [
    "assets/healedTattoo/ladybug.jpeg",
    "assets/healedTattoo/birdWithTwig.jpg",
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
                    <img className="relative w-screen " src="assets/sarahPortrait/sarahTattooing.jpeg" alt="404 Not Found"/>
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
