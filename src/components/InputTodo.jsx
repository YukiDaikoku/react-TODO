import React from 'react';

export const InputTodo=(props)=>{
  const{todoText,onChange,onClick} = props;
  return(     
    <div style={style}>
    <input disabled placeholder="TODOを入力"value={todoText}onChange={onChange}
    <button disabled onClick={onClick}>追加</button>
  </div>
  )
};