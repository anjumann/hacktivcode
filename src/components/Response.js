'use client'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

const Response = () => {
    const text = {
        data: "Sure! Here's a JavaScript code snippet that reverses the order of the words in a sentence without reversing the characters within each word:\n\n```javascript\nfunction reverseSentence(sentence) {\n  // Split sentence into an array of words\n  const words = sentence.split(\" \");\n\n  // Reverse the order of words in the array\n  const reversedWords = words.reverse();\n\n  // Join the reversed words back into a sentence\n  const reversedSentence = reversedWords.join(\" \");\n\n  return reversedSentence;\n}\n\n// Example usage:\nconst sentence = \"Hello, how are you?\";\nconst reversed = reverseSentence(sentence);\nconsole.log(reversed); // Output: \"you? are how Hello,\"\n```\n\nIn this code, we split the input sentence into an array of words using the `split` method. Then, we reverse the order of the words in the array using the `reverse` method. Finally, we join the reversed words back into a string using the `join` method, with a space as the separator.\n\nLet me know if you need any further assistance!"
    }
    const completion = text.data
    return (
        
        <Suspense fallback={<>Loading...</>}>
            <MDXRemote source={...completion} />
        </Suspense>
    )
}

export default Response