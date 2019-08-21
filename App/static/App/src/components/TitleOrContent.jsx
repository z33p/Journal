import React, { Component } from 'react';


function TitleOrContent(props) {
    if (props.tag === "p")
        return (
            <>
            <h3>Content</h3>
            <textarea
                rows = "10"
                name = "snippetContent"
                onChange = { props.onChange }
            ></textarea>
            </>
        );
    
    else return (
            <>
            <h3>Title</h3>
            <input
                name = "snippetTitle"
                type = "text"
                onChange = { props.onChange }
            ></input>
            </>
        );
}

export default TitleOrContent;