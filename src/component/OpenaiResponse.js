import React from 'react'

const OpenaiResponse = async ({ prompt }) => {

    try {

        console.log('Response');
        const bodyContent = JSON.stringify({
            "prompt": prompt || "Empty prompt",
        });
        const headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }
        const response = await fetch("http://localhost:3000/api", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        }).then((response) => { return response.json() });
        const data = response.res;
        console.log(data);


        console.log('Response end');

        return (
            <>
                <h1>OpenAI Response</h1>
                {
                    prompt ? <p>{data}</p> : <p>Enter a Prompt</p>
                }

            </>
        )

    } catch (error) {
        console.log(error);

        return (
            <>
                <h1>OpenAI Response</h1>
                <p>{error}</p>

            </>
        )

    }
}

export default OpenaiResponse