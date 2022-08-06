const UserInput = (props) => {






    return (
        <div>
            <div>
            <button className={button_css} onClick={handleEvent}>出来事を追加する</button>
            { props.Event.map((todo,index)=>(
                <div key={ `${sort}-${todo.id}` } className={card}>
                    <div className={card_row}>
                        <span className={label}>年齢</span>
                        <span className={input_number}>
                            {todo.readonly
                                ?  
                                <input defaultValue={todo.age} 
                                type="number" 
                                className="form-control" 
                                placeholder="詳細"
                                onBlur={handleChange("age",index)}
                                disabled
                                />
                                :
                                <input defaultValue={todo.age} 
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
                            {todo.readonly
                            ?
                            <input defaultValue={todo.incident} 
                            type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("incident",index)}
                            disabled/>
                            :
                            <input defaultValue={todo.incident} 
                            type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("incident",index)}/>
                            }
                        </span>
                    </div>            
                    <div className={card_row}>
                        <span className={label}>幸福度</span>
                        <span className={input_number}>
                            {todo.readonly
                            ?
                            <input defaultValue={todo.happiness} 
                            type="number" className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("happiness",index)}
                            disabled/>
                            :
                            <input defaultValue={todo.happiness} 
                            type="number" className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("happiness",index)}/>                        
                        }
                        </span>
                    </div>

                    <div className={card_row}>
                        <span className={label}>なぜそう思う</span>
                        <span className={input}>
                        {todo.readonly
                            ?
                            <input type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
                            onChange={handleChange("feeling",index)}
                            disabled></input>
                            :
                            <input type="text" 
                            className="form-control" 
                            placeholder="詳細" 
                            aria-describedby="basic-addon1"
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

export default UserInput;
