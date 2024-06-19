import contact from "../../data/dataContact.json"

export default function Contacts(){
    return(
        <div id="contact">
            <p className="title">Контакты</p>
            <div className="contentContact">{contact.map((obj =>{
                return(<a href={obj.link} key={obj.link}>{obj.name}</a>)
            }))}</div>
        </div>)
}

