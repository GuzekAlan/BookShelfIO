interface BookType {
    id: number;
    title: string;
    author: string;
    genre: string;
    owner: string;
    image: string;
}

const Books: BookType[] = [
    {
        id: 1,
        title: "Symbol",
        author: "Dan Brown",
        genre: "thriller",
        owner: "Adrian Scott",
        image: 'https://th.bing.com/th/id/R.b9d760cd49e6708246787a41de6587e9?rik=iy2epsnOR4W%2fug&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9800000%2fDamn-cute-cats-cute-kittens-9807010-1600-1200.jpg&ehk=oZGSG5vXlMFjrzWuPOKuVXfOOGR8nJd3Ea3kCJOFZb4%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        id: 2,
        title: "Sea",
        author: "Agata Cristie",
        genre: "thriller",
        owner: "Adrian Scott",
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg'
    }
]

export default Books