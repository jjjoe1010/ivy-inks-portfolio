import Container from "../../components/Container"

export default function About() {

    return(
        <main>
            <Container>
                <div className="space-y-10 bg-white py-10">

                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
                    <h1 className="pb-8 text-4xl">
                        Hi, Im Sarah! &lt;3
                    </h1>
                    <img className="relative w-screen " src="assets/sarahPortrait/sarahTattooing.jpeg" alt="404 Not Found"/>
                    </section>  

                    <section className="flex items-center w-full bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 min-h-150">
                      <div className=" w-full space-y-7 ">                        
                        <h1 className="pb-8 text-4xl">
                            Little about me
                        </h1>
                        <div className=" w-full space-y-7 text-3xl font-medium text-center">
                            <p >
                                Hello~!💛✨<br/>
                                I'm Sarah, but you'll probrably know me as Ivy🌿<br/>
                                I'm very passionate about creating bold, very cute, colourful tattoos!💛🎨
                            </p>
                            <p>
                                Art has always been a huge part of my life — from sketching and painting to anything creative I can get my hands on!
                            </p>
                            <p>
                                I’m also a massive music lover 🎧💥 — especially Rock and K-Pop! My go-to artists include Bad Omens, Dayseeker, Monsta X, and Sunmi.
                            </p>
                            <p>
                                ✨ When I’m not tattooing, I’m usually in full cozy mode:
                                🎮 Gaming (The Last of Us & Assassin’s Creed — Ezio era forever 👌🏻)
                                📚 Or getting lost in manga — especially horror! Anything by Junji Ito or spooky-themed has my heart 💀
                            </p>
                            <p>
                                Basically… if it’s creative, colourful, or a little bit dark — I’m in 💛
                            </p>                             
                        </div>
                    </div>
                    </section>

                    <section className="bg-[#9BC1BC] rounded-4xl px-10 pt-10 py-12 items-center min-h-150">
                        <h1 className="pb-8 text-4xl">
                            Also these are my cats! &lt;3
                        </h1>  
                    <img className="relative w-screen " src="assets/ponyoAndPumpkin.jpg" alt="404 Not Found"/>
                    </section>   

                    <section className=" bg-[#FFDFDC] rounded-4xl px-10 pt-10 py-12 min-h-150">
                    <div className=" w-full space-y-7">
                        <h1 className="pb-8 text-4xl">
                            After care
                        </h1>
                        <div className="flex items-center w-full text-2xl text-center">
                            <p>
                                under thinking ...
                            </p>                                 
                        </div>
                    </div>
                    </section>
                    
                </div>
            </Container>
        </main>
    )
}
