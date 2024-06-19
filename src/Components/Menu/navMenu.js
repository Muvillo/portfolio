export default function Button({name, link}){
    return(
        <a href={`#`+ link} key={name} className="btnMenu">{name}</a>
    );
}
