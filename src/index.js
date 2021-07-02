import React from 'react';
import ReactDOM from 'react-dom';

function PostItem(props){
    const value = props.value;

    return (<li>{value}</li>);
}

function PostList(props){
    const posts = props.posts;
    return(
        <ul>
            {posts.map((post) => 
                <PostItem key={post.id} value={post.title} />
            )}
        </ul>
    );
}

function PostContents(props){
    const posts = props.posts;
    return (
        posts.map((post)=><div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>)
    );
}


function Blog(props){
    const posts= props.posts;
    const sidebar = <PostList posts={posts}/>;
    const content = <PostContents posts={posts}/>;

    return(
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
                {id: 1, title:'HelloWorld', content: 'tesdksdkmask daksmdkams dmaskdmkas dmsakm' },
                {id: 2, title:'Titulo 2', content: 'tesdksdkmask daksmdkams dsad sdadsa dsadasd as dmsakm' }];
ReactDOM.render(<Blog posts={posts}/>,document.getElementById('root'));