import data from "../../data/dataStack.json"

export default function Stack(){
    return(
        <div id="stack">
            <p className="title">Стек технологий</p>

            <div className="stack">{data.map(obj =>{
                return(
                    <div className="stackContainer"  key={obj.nameStack}>
                        <p className="nameStack">{obj.nameStack}</p>
                        <div>{obj.stacks.map((element =>{
                            return(<p className="" key={element}>{element}</p>)
                        }))}</div>
                    </div>
                )
            })}</div>
        </div>
    )
}