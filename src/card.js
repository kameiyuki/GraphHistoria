import classNames from 'classnames'
import { useState } from 'react'

const Card = (props) => {
    //dasfjasdlkjfqpoweiu
    const card=classNames("card","mb-3","bg-light")
    const card_row=classNames("row","card-row")
    const button_css=classNames("mt-3","mb-3")
    const label=classNames("col-2","text-right","card-label")
    const input=classNames("col-9","text-left","card-input")
    const input_number=classNames("col-3","text-left","card-input")

    const [sort,setsort]= useState("change")

    const handleChange=(item,index) =>{
        return function(event){
            if(item==="age"){
                props.Event[index][item]=Number(event.target.value)
                props.Event.sort(function(val1,val2){
                    var age1=val1.age
                    var age2=val2.age
                    if(age1<age2){
                        changeSort(sort,setsort)
                        return -1
                    }
                    else if(age1>age2){
                        changeSort(sort,setsort)
                        return 1
                    }
                    else{
                        return 0
                    }
                })
            }
            else{
                props.Event[index][item]=event.target.value
            }
            props.setEvent([...props.Event])  
            console.log(props.Event)
        }
    }

    const changeSort=(sort,setsort)=>{
        if(sort==="change"){
            setsort("change1")
        }
        else{
            setsort("change")
        }
    }

    const handleEvent=()=>{
        console.log("buttonclick")
        var idMax=0;
        for(let i=0;i<props.Event.length;i++){
            if(props.Event[i]["id"]>idMax){
                idMax=props.Event[i]["id"];
            }
        }
        const NewId=idMax+1;
        var pushdata={id:0,age:1,incident:'',happiness:0,feeling:"",readonly:false}
        pushdata.id=NewId
        props.Event.splice(1,0,pushdata)
        props.setEvent([...props.Event])
    }

    return (
        <div>
            <div>
            <button className={button_css} onClick={handleEvent}>出来事を追加する</button>
            { props.Event.map((EachEvent,index)=>(
                <div key={ `${sort}-${EachEvent.id}` } className={card}>
                    <div className={card_row}>
                        <span className={label}>年齢</span>
                        <span className={input_number}>
                            {EachEvent.readonly
                                ?  
                                <input defaultValue={EachEvent.age} 
                                type="number" 
                                className="form-control" 
                                placeholder="詳細"
                                onBlur={handleChange("age",index)}
                                disabled
                                />
                                :
                                <input defaultValue={EachEvent.age} 
                                type="number" 
                                className="form-control" 
                                placeholder="詳細"
                                onBlur={handleChange("age",index)}
                                />    
                            }
                        </span>
                    </div>
                    <div className={card_row}>
                        <span className={label}>出来事</span>
                        <span className={input}> 
                            {EachEvent.readonly
                            ?
                            <input defaultValue={EachEvent.incident} 
                            type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("incident",index)}
                            disabled/>
                            :
                            <input defaultValue={EachEvent.incident} 
                            type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("incident",index)}/>
                            }
                        </span>
                    </div>            
                    <div className={card_row}>
                        <span className={label}>幸福度</span>
                        <span className={input_number}>
                            {EachEvent.readonly
                            ?
                            <input defaultValue={EachEvent.happiness} 
                            type="number" className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("happiness",index)}
                            disabled/>
                            :
                            <input defaultValue={EachEvent.happiness} 
                            type="number" className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("happiness",index)}/>                        
                        }
                        </span>
                    </div>

                    <div className={card_row}>
                        <span className={label}>なぜそう思う</span>
                        <span className={input}>
                        {EachEvent.readonly
                            ?
                            <input type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("feeling",index)}
                            disabled></input>
                            :
                            <input type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            onChange={handleChange("feeling",index)}></input>
                        }
                        </span>
                    </div>
                </div>
            ))}
            </div>
        </div>
  );
}

export default Card;
