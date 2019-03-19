import React, { Component } from 'react'
import serialize from 'serialize-javascript'

const response = [
    {
        id: 1, 
        title: 'My blogspot 1 ...',
        content: '<p>This is <strong>HTML</strong> code'
    },
    {
        id: 2,
        title: 'My blogspot 2',
        content: '<p>Alert: <script>alert(1)</script></p>'
    },
    {
        id: 3,
        title: 'My blogspot 3',
        content: `
            <p>
                <img onmouseover="alert('this site is not secure');" src="attack.jpg" /> 
            </p>
        `
    }
];

const secureInitialState = serialize(response);
const insecureInitialState = JSON.stringify(response);
console.log(secureInitialState)
console.log(insecureInitialState)

const removeXSSAttacks = html => { 
	const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

	// Removing the <script> tags
	while(SCRIPT_REGEX.test(html)){
		html = html.replace(SCRIPT_REGEX, '')
	}

	// Removing all events from tags ... 
	html = html.replace(/ on\w+="[^"]*"/g, '');
	return  {
		__html: html
	}
}

class Xss extends Component {
    render() {
        const posts = JSON.parse(secureInitialState);
        return (
            <div className="Xss">
                {posts.map((post, key) => (
                    <div key={key}>
                        <h2>{post.title}</h2>
						<p><strong>Secure code: </strong></p>
                        <p>{post.content}</p>
						<p><strong>insecure code: </strong></p>
						<p dangerouslySetInnerHTML={removeXSSAttacks(post.content)} />
                    </div>
                ))}
            </div>
        )
    }
}

export default Xss
