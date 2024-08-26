export default function PageBody(){

    return <>
        <section className="bg-secondary py-14 flex justify-center">
            <div className="w-3/6 text-accenture">
                 <p className="text-xl text-balance"><i class="bi bi-quote text-primary"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, eveniet inventore. Non nesciunt fuga saepe iste natus officiis quidem at, sint quae delectus, similique nihil qui tempore recusandae quaerat numquam. <i class="bi bi-quote text-primary"></i></p>
            </div>
        </section>

         <section className="flex justify-center pt-10 pb-10 bg-secondary">
            <div className="container flex flex-wrap">
                <div className="w-screen md:w-1/4 text-center mt-8">
                    <i className="bi bi-snow text-4xl text-primary"></i>
                    <p className="my-4">Lorem, ipsum dolor.</p>
                    <div className="h-1 bg-primary w-52 mx-auto relative before:content-[''] before:w-5 before:h-5 before:border-primary before:bg-secondary before:rounded-full before:absolute before:border-2 before:bottom-0 before:translate-x-[-50%] before:translate-y-1/2">
                    </div>
                </div>

                <div className="w-full md:w-1/4 text-center mt-8">
                <i className="bi bi-triangle-fill text-4xl text-primary"></i>
                <p className="my-4">Lorem, ipsum dolor.</p>
                <div className="h-1 bg-primary w-52 mx-auto relative before:content-[''] before:w-5 before:h-5 before:border-primary before:bg-secondary before:rounded-full before:absolute before:border-2 before:bottom-0 before:translate-x-[-50%] before:translate-y-1/2">
                    </div>
                </div> 

                <div className="w-full md:w-1/4 text-center mt-8">
                    <i className="bi bi-map-fill text-4xl text-primary"></i>
                    <p className="my-4">Lorem, ipsum dolor.</p>
                    <div className="h-1 bg-primary w-52 mx-auto relative before:content-[''] before:w-5 before:h-5 before:border-primary before:bg-secondary before:rounded-full before:absolute before:border-2 before:bottom-0 before:translate-x-[-50%] before:translate-y-1/2">
                    </div>
                </div>  

                <div className="w-screen md:w-1/4 text-center mt-8">
                    <i className="bi bi-triangle-half text-4xl text-primary"></i>
                    <p className="my-4">Lorem, ipsum dolor.</p>
                    <div className="h-1 bg-primary w-52 mx-auto relative before:content-[''] before:w-5 before:h-5 before:border-primary before:bg-secondary before:rounded-full before:absolute before:border-2 before:bottom-0 before:translate-x-[-50%] before:translate-y-1/2">
                    </div>
                </div>  

            </div>
        </section>

        <section className="pt-10 bg-secondary flex justify-between flex-col md:flex-row">
            <div className=" w-screen mt-6 md:w-[35%] md:ml-16">
                <h2 className="text-3xl font-semibold text-primary">Lorem, ipsum dolor.</h2>
                <p className="text-accenture">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia dolorum fugiat nemo libero. Praesentium doloribus ratione voluptas nisi sequi.</p>
                <p className="text-accenture my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia dolorum fugiat nemo libero. Praesentium doloribus ratione voluptas nisi sequi.</p>
            </div>
            <div className="w-screen mt-6 md:w-[35%] md:mr-16 text-end">
                <h2 className="text-3xl text-primary font-semibold">Lorem, ipsum dolor.</h2>
                <p className="text-accenture">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia dolorum fugiat nemo libero. Praesentium doloribus ratione voluptas nisi sequi.</p>
                <p className="my-3 text-accenture">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quia dolorum fugiat nemo libero. Praesentium doloribus ratione voluptas nisi sequi.</p>
            </div>

            
        </section>
            <div className="h-[500px] bg-secondary bg-bgTrees2 bg-cover bg-no-repeat flex justify-center items-center">
                <div>
                <button className="bg-primary text-lg py-1 px-10 text-white ">Lorem ipsum</button>
                </div>
            </div>
       
    </>
}