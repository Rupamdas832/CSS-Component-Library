import React from 'react'
import Heading from '../Components/Heading'

const Card = () => {
    return (
        <div>
        <Heading title="Card"/>
        <div className="card">
            <div className="cardHeader">
                <h2>Heading</h2>
            </div>
            <div className="cardBody">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="cardFooter">
                <button className="btn outline">Like</button>
                <button className="actionBtn">Read more...</button>
            </div>   
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardHeader%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EHeading%253C%252Fh2%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardBody%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ELorem%2520Ipsum%2520is%2520simply%2520dummy%2520text%2520of%2520the%2520printing%2520and%2520typesetting%2520industry.%2520Lorem%2520Ipsum%2520has%2520been%2520the%2520industry%27s%2520standard%2520dummy%2520text%2520ever%2520since%2520the%25201500s%252C%2520when%2520an%2520unknown%2520printer%2520took%2520a%2520galley%2520of%2520type%2520and%2520scrambled%2520it%2520to%2520make%2520a%2520type%2520specimen%2520book.%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardFooter%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253ELike%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522actionBtn%2522%253ERead%2520more...%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%2520%2520%2520%250A%253C%252Fdiv%253E"
  style={{width: "1024px", height: "444px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        <div className="card">
            <div className="cardHeader">
                <h2>Heading</h2>
            </div>
            <div className="cardImg">
                <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            </div>
            <div className="cardBody">
                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
            </div>
            <div className="cardFooter">
                <button className="btn outline"><i class="far fa-heart"></i></button>
                <button className="actionBtn">More..</button>
            </div>   
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522card%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardHeader%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EHeading%253C%252Fh2%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardImg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardBody%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EIt%2520has%2520survived%2520not%2520only%2520five%2520centuries%252C%2520but%2520also%2520the%2520leap%2520into%2520electronic%2520typesetting%252C%2520remaining%2520essentially%2520unchanged.%2520It%2520was%2520popularised%2520in%2520the%25201960s%2520with%2520the%2520release%2520of%2520Letraset%2520sheets%2520containing%2520Lorem%2520Ipsum%2520passages%252C%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardFooter%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522actionBtn%2522%253EMore..%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%2520%2520%2520%250A%253C%252Fdiv%253E"
  style={{width: "1024px", height: "499px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        <div className="flatCard">
            <div className="imgFlat">
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/85d4f30a-91e4-44c0-a263-046a445c730b/jordan-react-elevation-pf-basketball-shoe-WhWgxz.jpg"/>
            </div>
            <div className="detailFlat">
                <h2>Jordan React Elevation PF</h2>
                <div className="priceFlat">
                    <h4>₹10295</h4>
                    <h5>50% off</h5>
                </div>
                <p>Play with flair, but focus on the fundamentals. The Jordan React Elevation is inspired by team players who beat opponents with their grit and tenacity at both ends of the court. Light and durable, it offers a secure, supportive fit.</p>
                <div className="btnsFlat">
                    <button className="btn outline"><i class="far fa-heart"></i></button>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522flatCard%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522imgFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522https%253A%252F%252Fstatic.nike.com%252Fa%252Fimages%252Ft_PDP_864_v1%252Ff_auto%252Cb_rgb%253Af5f5f5%252F85d4f30a-91e4-44c0-a263-046a445c730b%252Fjordan-react-elevation-pf-basketball-shoe-WhWgxz.jpg%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522detailFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EJordan%2520React%2520Elevation%2520PF%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522priceFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%25E2%2582%25B910295%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E50%2525%2520off%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EPlay%2520with%2520flair%252C%2520but%2520focus%2520on%2520the%2520fundamentals.%2520The%2520Jordan%2520React%2520Elevation%2520is%2520inspired%2520by%2520team%2520players%2520who%2520beat%2520opponents%2520with%2520their%2520grit%2520and%2520tenacity%2520at%2520both%2520ends%2520of%2520the%2520court.%2520Light%2520and%2520durable%252C%2520it%2520offers%2520a%2520secure%252C%2520supportive%2520fit.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522btnsFlat%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2522%253EAdd%2520to%2520Cart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
  style={{width: "1024px", height: "554px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        <div className="ecommerceCard">
            <div className="cardBadge">
                <h5>New</h5>
            </div>
            <div className="cardImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxtc_LfP4RWXhrXJDDQyLZlEWVrlPLLhlF6LdU9UkiWlYGZfHEsSIzqU5fS7LGe6UOlHaCtpV&usqp=CAc"/>
            </div>
            <div className="cardBody">
                <p>boAt Airdopes 131 Bluetooth Headset</p>
            <div className="cardPrice">
                <h4>₹5999</h4>
                <h5>50% off</h5>
            </div>
            </div>
            <div className="cardFooter">
                <button className="btn outline"><i class="far fa-heart"></i></button>
                <button className="btn">Add to Cart</button>
            </div>   
        </div>
        <iframe
  src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522ecommerceCard%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardBadge%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253ENew%253C%252Fh5%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardImg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522sample.jpg%2522%252F%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardBody%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EboAt%2520Airdopes%2520131%2520Bluetooth%2520Headset%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardPrice%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%25E2%2582%25B95999%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E50%2525%2520off%253C%252Fh5%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522cardFooter%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520outline%2522%253E%253Ci%2520class%253D%2522far%2520fa-heart%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2522%253EAdd%2520to%2520Cart%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%2520%2520%2520%250A%253C%252Fdiv%253E"
  style={{width: "799px", height: "536px", margin: "2rem 0"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
        </div>
    )
}

export default Card
