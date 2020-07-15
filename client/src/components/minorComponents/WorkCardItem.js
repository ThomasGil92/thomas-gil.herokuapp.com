import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';


const WorkCardItem = () => {
    const sites = useSelector(function (state) { return state.sites });
    const [hovered, setHovered] = useState({
        isHover: false
    });

    const onMouseEnterHandler = key => {
        console.log(key)
        setHovered({
            isHover: key
        });
        console.log(hovered)
    }
    const onMouseLeaveHandler = key => {
        console.log(key)
        setHovered({
            isHover: false
        });
        console.log(hovered)
    }



    const WorkItem = (imgUrl, /* logo, */ bg, text, site, siteUrl) => {
        return (
            <div className=" mb-4" >
                <div className="w-100" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "250px" }}>
                    <div
                        onMouseEnter={() => onMouseEnterHandler(site)}
                        onMouseLeave={() => onMouseLeaveHandler(site)}
                        className="bg-dark-0_5 rounded w-100 h-100 d-flex align-items-center justify-content-center" >
                        {hovered.isHover._id === site._id ? (
                            <a href={siteUrl} className="btn p-0 d-block h-100 w-100">
                                <div className={bg + " text-center d-flex align-items-center justify-content-center  h-100 rounded "}>

                                    {/* <img src={logo} className="col-3" width="100%" /> */}
                                    <h3 className="text-white animate__animated animate__backInUp">Visiter le site <i class="fas fa-arrow-right"></i></h3>

                                </div>
                            </a>
                        ) : (
                                <h3 className="text-white mb-0 px-3"><strong>{text}</strong></h3>
                            )}


                    </div>
                </div>

                {/* <div className="w-100" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "250px" }}>
                    <div className="bg-dark-0_5 rounded zone_1 w-100 align-items-center justify-content-center h-100" >
                        <h3 className="text-white mb-0 px-3"><strong>{text}</strong></h3>
                        <div className={bg + " w-100 text-center align-items-center justify-content-center h-100 rounded zone_2"}>
                            <img src={logo} className="col-3" width="100%" />
                        </div>
                    </div>
                </div> */}
            </div>

        )
    }
    return (
        <div className="row d-flex justify-content-center">
            {sites.length && sites.map((site, i) => (
                <div
                    className="col-12 col-md-4 mx-auto px-2" key={i}>
                    {WorkItem(site.imgCollection[0],/*  "./img/Groupe_1.png", */ 'bg-custom', site.title, site, site.url)}
                </div>
            ))}
        </div>
    )
}

export default WorkCardItem