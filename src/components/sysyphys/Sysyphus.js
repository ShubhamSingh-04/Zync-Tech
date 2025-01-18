import React from 'react'
import './Sysyphus.css'

export default function Sysyphus() {
    return (
        <div className='sysyphus-container'>
            <img src="/images/sysyphus.png" alt="" className="sysyphus-logo" />
            <p className="sysyphus-title">
                We’ve been using Untitled to kick start every new project and can’t imagine working without it.
            </p>

            <img src="/images/sysyphys-prod-mng.png" alt="" className="sysyphus-prod-mng-img" />
            <p className="sysyphus-prod-mng-name">Candice Wu</p>
            <p className="sysyphus-prod-mng-desig">Product Manager, Sisyphus</p>
        </div>
    )
}
