import React, { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setLang} from "../../actions"


const HomeHeader = () => {
    const dispatch=useDispatch()
const language = useSelector(state => state.language);

  const selectedLang=e=>{
    console.log(e.target.value)
    dispatch(setLang(e.target.value))
  }
    return (
        <Fragment>
            <div>
                <select name="lang" onChange={selectedLang} >
                    <option value="fr">Français</option>
                    <option value="en">Anglais</option>
                </select>
                
                

            </div>
            <div className="text-center py-3 text-dark">
                {language === "fr" && <h1 className="font-weight-bold mb-2 mt-2">Développeur web fullstack</h1>}
                {language === "en" && <h1 className="font-weight-bold mb-2 mt-2">Fullstack web developer</h1>}
                <p className="lead">React / Node / Wordpress</p>
            </div>
            <div className="col-6 col-md-2 mx-auto mt-5 ">
                <img className="rounded-circle " alt="avatar" width="100%" src="./img/myAvatar.png" />
            </div>
        </Fragment >
    )
}

export default HomeHeader
