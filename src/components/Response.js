import React from 'react'

const Response = ({data}) => {
   
    return (

        <div className="">

            {data.split("\n").map((item) => {
                return (
                    <>
                        {item}
                        <br />
                    </>
                )
            })}
        </div>
    )
}

export default Response