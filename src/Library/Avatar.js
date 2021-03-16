import React from 'react'
import Heading from '../Components/Heading'

const Avatar = () => {
    return (
        <div>
        <Heading title="Avatar"/>
            <div className="avatarDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" class="avatar"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" class="avatar md"/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" class="avatar lg"/>
            </div>
            <pre>
                <code>
                    <p>{`
<img src="sample.jpg" class="avatar"/>
<img src="sample.jpg" class="avatar md"/>
<img src="sample.jpg" class="avatar lg"/>
                    `}</p>
                </code>
            </pre>
            <div className="badgeAvatarDiv">
                <div class="badgeAvatar">
                    <span></span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"/>
                </div>
                <div class="badgeAvatar red">
                    <span></span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"/>
                </div>
                <div class="badgeAvatar orange">
                    <span></span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU"/>
                </div>
            </div>
            <pre>
                <code>
                    <p>{`
<div class="badgeAvatar">
    <span>8</span>
    <img src="sample.jpg"/>
</div>
<div class="badgeAvatar red">
    <span>R.D</span>
    <img src="sample.jpg"/>
</div>
<div class="badgeAvatar blue">
    <span>8</span>
    <img src="sample.jpg"/>
</div>
                    `}</p>
                </code>
            </pre>
        </div>
    )
}

export default Avatar
