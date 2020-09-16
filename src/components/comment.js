import React from "react"

export default function Comment({comment}) {
    const timestamp = new Date(comment.Created.toDate())
    const tsMonth = timestamp.getMonth() + 1
    const tsDay = timestamp.getDate()
    const tsYear = timestamp.getFullYear()
    return (
        <>
            <p>
                <img src={"https://api.adorable.io/avatars/120/"+ comment.Visitor + ".png"} alt={comment.Visitor} />
                <strong>{comment.Visitor} says:</strong>
            </p>
            <p>
                <em>{comment.Message}</em>
            </p>
            <p>
                <small>{tsMonth}/{tsDay}/{tsYear}</small>
            </p>
        </>
    )
}