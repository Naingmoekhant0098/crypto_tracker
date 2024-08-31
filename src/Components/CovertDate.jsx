import React from 'react'

const CovertDate = (number) => {
    let myDate = new Date(number);

  return myDate.getDate()  + "/" + myDate.getMonth() +1;

}

export default CovertDate