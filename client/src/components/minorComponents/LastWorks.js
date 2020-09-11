import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import WorkCardItem from './WorkCardItem'


const LastWorks = () => {
    return (
        <Fragment>
            <div className="col-12 text-center last-work mt-5">
                <h1 className="text-dark">Travaux Récents</h1>
            </div>
            <div className="container-fluid pb-5">
                <div className="px-0 px-md-4 pt-4 text-center">
                    <WorkCardItem />

                </div>
            </div>
        </Fragment>
    )
}
export default LastWorks