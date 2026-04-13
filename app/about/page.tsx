import Container from "../../components/Container"

export default function About() {

    return(
        <main>
            <Container>
                <div className="space-y-10 bg-white py-10">
                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                    <h1 className="pb-8 text-4xl">
                        Hi, Im Sarah! &lt;3
                    </h1>
                    <img className="relative w-screen " src="assets/sarah-about-picture.jpg" alt="404 Not Found"/>
                    </section>  
                    <section className="bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 items-center min-h-170">
                        <h1 className="pb-8 text-4xl">
                            These are my cats! &lt;3
                        </h1>  
                    <img className="relative w-screen " src="assets/ponyoAndPumpkin.jpg" alt="404 Not Found"/>
                    </section>
                    <section className=" bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 min-h-170">
                    <div className=" w-full space-y-7">
                        <h1 className="pb-8 text-4xl">
                            After care
                        </h1>
                        <div className="flex items-center w-full text-2xl text-center">
                            <p>
                                Blah blah blah
                            </p>                                 
                        </div>
                    </div>
                    </section>
                </div>
            </Container>
        </main>
    )
}
