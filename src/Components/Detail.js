import React, { useEffect } from 'react'
import "./Detail.css"

import Badge from "../Library/Badge"
import Avatar from "../Library/Avatar"
import Form from '../Library/Form'
import Input from '../Library/Input'
import Card from '../Library/Card'
import Button from '../Library/Button'
import GettingStarted from '../Library/GettingStarted'
import Navbar from '../Library/Navbar'
import Modal from '../Library/Modal'
import Tooltip from '../Library/Tooltip'
import Dropdown from '../Library/Dropdown'
import Spinner from '../Library/Spinner'

const Detail = ({route = "button"}) => {


    const renderSwitch = () => {
        switch(route) {
            case 'getting started':
                return <GettingStarted/>;
            case 'button':
                return <Button/>;
            case 'avatar':
                return <Avatar/>
            case 'form':
                return <Form/>
            case 'input':
                return <Input/>
            case 'card':
                return <Card/>
            case 'navbar':
                return <Navbar/>
            case 'modal':
                return <Modal/>
            case 'tooltip':
                return <Tooltip/>
            case 'badge':
                return <Badge/>
            case 'dropdown':
                return <Dropdown/>
            case 'spinner':
                return <Spinner/>
            default :
                return <GettingStarted/>
        }
    }
    return (
        <div className="detailSection">
           {renderSwitch()}
        </div>
    )
}

export default Detail
