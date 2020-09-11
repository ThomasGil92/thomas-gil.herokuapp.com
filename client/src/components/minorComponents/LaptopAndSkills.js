import React from 'react'

const LaptopAndSkills = () => {
    return (
        <div
            className="middle-section col-12 text-center pt-5 pb-5 px-0"
            style={{
                background: " linear-gradient(180deg, rgba(33,11,132,1) 0%, rgba(17,46,232,1) 100%)"
            }}>
            <img
                className="col-md-10 col-12 position-absolute desktop-img"

                alt="laptop"
                width="100%"
                src="./img/laptop-img-presta.png" />
            <div className="col-12 col-md-6 my-5 px-0 text-white mx-auto">
                <h3>Hello, je m'appelle Thomas. <br />Ravi de vous connaitre.</h3>
                <p className="px-3 text-justify text-center ">Depuis le début de mon parcours de développeur (il y a deux ans de cela), je n'ai cessé d'évoluer et d'apprendre de nouvelles technologies afin de vous proposer un service et des produits de qualité. L'adaptation et la disponibilité sont mes priorités afin de répondre précisément à vos attentes.</p>
            </div>
            

        </div>
    )
}

export default LaptopAndSkills