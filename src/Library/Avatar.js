import React from 'react'
import Heading from '../Components/Heading'

const Avatar = () => {
    return (
        <div>
        <Heading title="Avatar"/>
        <div className="container">
            <div className="avatarDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" className="avatar" alt="img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" className="avatar md" alt="img"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" className="avatar lg" alt="img"/>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cimg%2520src%253D%2522sample.jpg%2522%2520className%253D%2522avatar%2522%252F%253E%250A%253Cimg%2520src%253D%2522sample.jpg%2522%2520className%253D%2522avatar%2520md%2522%252F%253E%250A%253Cimg%2520src%253D%2522sample.jpg%2522%2520className%253D%2522avatar%2520lg%2522%252F%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <div className="badgeAvatarDiv">
                <div className="badgeAvatar">
                    <span>8</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" alt="img"/>
                </div>
                <div className="badgeAvatar orange">
                    <span>R</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" alt="img"/>
                </div>
                <div className="badgeAvatar red">
                    <span>8</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" alt="img"/>
                </div>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522badgeAvatar%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E8%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522badgeAvatar%2520red%2522%253E%250A%2520%2520%2520%2520%253Cspan%253ER.D%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522badgeAvatar%2520blue%2522%253E%250A%2520%2520%2520%2520%253Cspan%253E8%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%253C%252Fdiv%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>
        </div>
    )
}

export default Avatar
