function Post(props){
    const { title, colorTitle, descr } = props;

    return(
        <div className="post_item">
            <h2 style={{ color: colorTitle }}>{ title }</h2>
            <p>{ descr }</p>
        </div>
    )
}

export default Post;