import Post from "./Post";

function PostList(){
    const data = [
        { id: 1, colorTitle: 'red', title: 'Когда лето?', descr: 'Блинб, не скоро :(' },
        { id: 2, colorTitle: 'yellow', title: 'Крутая погода', descr: 'Всю неделю в среднем 20' },
        { id: 3, colorTitle: 'purple', title: 'Выпил вкусную газировку', descr: 'Оооочень вкусную' }
    ]

    return(
        <div style={{ display: 'flex', gap: '50px' }}>
            { data.map(el =>
                <Post
                    key={el.id}
                    title={el.title}
                    colorTitle={el.colorTitle}
                    descr={el.descr}
                />) }
        </div>
    )
}

export default PostList;