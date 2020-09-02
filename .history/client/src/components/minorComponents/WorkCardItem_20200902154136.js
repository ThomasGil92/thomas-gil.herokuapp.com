import React, { Fragment, useState, useEffect } from 'react'
import { useSelector } from 'react-redux';


const WorkCardItem = () => {
    const sites = useSelector(function (state) { return state.sites });
    const language = useSelector(state => state.language);
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
            <div className="mb-5 mb-md-4" >
                <div className="w-100 rounded" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "250px" }}>
                    <div
                        onMouseEnter={() => onMouseEnterHandler(site)}
                        onMouseLeave={() => onMouseLeaveHandler(site)}
                        className=" rounded w-100 h-100 d-flex align-items-center justify-content-center" >
                        {hovered.isHover._id === site._id ? (
                            <a 
                            style={{ boxSizing: "content-box" }} 
                            href={siteUrl} 
                            className="btn p-0 d-block h-100 w-100 rounded"
                            rel="noopener noreferrer nofollow"
                            target="_blank"
                            >
                                <div className={bg + " text-center d-flex align-items-center justify-content-center  h-100 rounded "}>

                                {language === "fr" && <h3 className="text-white ">Visiter le site <i className="fas fa-arrow-right"></i></h3>}
                                {language === "en" && <h3 className="text-white ">Visit the site <i className="fas fa-arrow-right"></i></h3>}

                                </div>
                            </a>
                        ) : (
                                <h3 className="text-white col-11 rounded mb-0 py-2 px-3 bg-dark2 "><strong>{text}</strong></h3>
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
                    className="col-10 col-md-4 mx-auto px-2" key={i}>
                    {WorkItem(site.imgCollection[0],/*  "./img/Groupe_1.png", */ 'bg-custom', site.title, site, site.url)}
                </div>
            ))}
        </div>
    )
}

export default WorkCardItem