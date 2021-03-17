import React from 'react'
import Heading from '../Components/Heading'

const Modal = () => {
    return (
        <div>
        <Heading title="Modal"/>
        <div class="modalDiv">
        <button class="btn hover" id="modalOpen">Modal</button>
        <div class="modal" id="modal">
            <div class="modalBox">
                <div class="modalHeader">
                    <h2>Heading</h2>
                    <button class="btn unstyled" id="modalClose">X</button>
                </div>
                <div class="modalBody">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div class="modalFooter">
                    <button class="btn">Action</button>
                </div>
            </div>
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520hover%2522%2520id%253D%2522modalOpen%2522%253EModal%253C%252Fbutton%253E%250A%253Cdiv%2520class%253D%2522modal%2522%2520id%253D%2522modal%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modalBox%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modalHeader%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EHeading%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520unstyled%2522%2520id%253D%2522modalClose%2522%253EX%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modalBody%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ELorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%2520industry.%2520Lorem%2520Ipsum%2520has%2520been%2520the%2520industry%27s%2520standard%2520dummy%2520text%2520ever%2520since%2520the%25201500s%252C%2520when%2520an%2520unknown%2520printer%2520took%2520a%2520galley%2520of%2520type%2520and%2520scrambled%2520it%2520to%2520make%2520a%2520type%2520specimen%2520book.%2520It%2520has%2520survived%2520not%2520only%2520five%2520centuries%252C%2520but%2520also%2520the%2520leap%2520into%2520electronic%2520typesetting%252C%2520remaining%2520essentially%2520unchanged.%2520It%2520was%2520popularised%2520in%2520the%25201960s%2520with%2520the%2520release%2520of%2520Letraset%2520sheets%2520containing%2520Lorem%2520Ipsum%2520passages%252C%2520and%2520more%2520recently%2520with%2520desktop%2520publishing%2520software%2520like%2520Aldus%2520PageMaker%2520including%2520versions%2520of%2520Lorem%2520Ipsum.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modalFooter%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253EAction%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
  style={{width: "1000px", height: "575px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        <button class="btn hover" id="imgModalOpen">Image Modal</button>
        <div class="imgModal" id="imgModal">
            <div class="flatCard">
                <div class="imgFlat">
                    <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/85d4f30a-91e4-44c0-a263-046a445c730b/jordan-react-elevation-pf-basketball-shoe-WhWgxz.jpg"/>
                </div>
                <div class="imgModalClose">
                    <button class="btn unstyled" id="imgModalClose">X</button>
                </div>
                <div class="detailFlat">
                        <h2>Jordan React Elevation PF</h2>
                    <div class="priceFlat">
                        <h4>₹10295</h4>
                        <h5>50% off</h5>
                    </div>
                    <p>Play with flair, but focus on the fundamentals. The Jordan React Elevation is inspired by team players who beat opponents with their grit and tenacity at both ends of the court. Light and durable, it offers a secure, supportive fit.</p>
                    <div class="btnsFlat">
                        <button class="btn outline"><i class="far fa-heart"></i></button>
                        <button class="btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520hover%2522%2520id%253D%2522imgModalOpen%2522%253EImage%2520Modal%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522imgModal%2522%2520id%253D%2522imgModal%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522flatCard%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522imgFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522imgModalClose%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520unstyled%2522%2520id%253D%2522imgModalClose%2522%253EX%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522detailFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EJordan%2520React%2520Elevation%2520PF%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522priceFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%25E2%2582%25B910295%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E50%2525%2520off%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EPlay%2520with%2520flair%252C%2520but%2520focus%2520on%2520the%2520fundamentals.%2520The%2520Jordan%2520React%2520Elevation%2520is%2520inspired%2520by%2520team%2520players%2520who%2520beat%2520opponents%2520with%2520their%2520grit%2520and%2520tenacity%2520at%2520both%2520ends%2520of%2520the%2520court.%2520Light%2520and%2520durable%252C%2520it%2520offers%2520a%2520secure%252C%2520supportive%2520fit.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522btnsFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253EAdd%2520to%2520Cart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
  style={{width: "1000px", height: "625px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
    </div>
        </div>
    )
}

export default Modal
