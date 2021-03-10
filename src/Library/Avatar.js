import React from 'react'
import Heading from '../Components/Heading'

const Avatar = () => {
    return (
        <div>
        <Heading title="Avatar"/>
            <div>
                <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" class="avatar"/>
                <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" class="avatar md"/>
                <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70" class="avatar lg"/>
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
            <div>
                <div class="badgeAvatar">
                    <span>8</span>
                    <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"/>
                </div>
                <div class="badgeAvatar red">
                    <span>R.D</span>
                    <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"/>
                </div>
                <div class="badgeAvatar blue">
                    <span>8</span>
                    <img src="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"/>
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
