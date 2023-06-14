interface RentedBooksType {
    id: number
    rented: boolean
    title: string
    author: string
    image: string
    genre?: string
    rentedFrom?: string
    rentDate?: string
    returnDate?: string
    isExpire?: boolean
}

const RentedFrom: RentedBooksType[] = [
    {
        id: 1,
        rented: true,
        title: "Symbol",
        author: "Dan Brown",
        image: 'https://th.bing.com/th/id/R.b9d760cd49e6708246787a41de6587e9?rik=iy2epsnOR4W%2fug&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9800000%2fDamn-cute-cats-cute-kittens-9807010-1600-1200.jpg&ehk=oZGSG5vXlMFjrzWuPOKuVXfOOGR8nJd3Ea3kCJOFZb4%3d&risl=&pid=ImgRaw&r=0',
        rentedFrom: "Adrian Mysiak",
        rentDate: "11-01-2023",
        returnDate: "23-05-2023",
        isExpire: false

    },
    {
        id: 2,
        rented: true,
        title: "Symbol",
        author: "Dan Brown",
        image: 'https://th.bing.com/th/id/R.b9d760cd49e6708246787a41de6587e9?rik=iy2epsnOR4W%2fug&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9800000%2fDamn-cute-cats-cute-kittens-9807010-1600-1200.jpg&ehk=oZGSG5vXlMFjrzWuPOKuVXfOOGR8nJd3Ea3kCJOFZb4%3d&risl=&pid=ImgRaw&r=0',
        rentedFrom: "Adrian Mysiak",
        rentDate: "11-01-2023",
        returnDate: "23-05-2023",
        isExpire: true

    },
    {
        id: 3,
        rented: true,
        title: "Symbol",
        author: "Dan Brown",
        image: 'https://th.bing.com/th/id/R.b9d760cd49e6708246787a41de6587e9?rik=iy2epsnOR4W%2fug&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9800000%2fDamn-cute-cats-cute-kittens-9807010-1600-1200.jpg&ehk=oZGSG5vXlMFjrzWuPOKuVXfOOGR8nJd3Ea3kCJOFZb4%3d&risl=&pid=ImgRaw&r=0',
        rentedFrom: "Adrian Mysiak",
        rentDate: "11-01-2023",
        returnDate: "23-05-2023",
        isExpire: false

    },
    {
        id: 4,
        rented: true,
        title: "Symbol",
        author: "Dan Brown",
        image: 'https://th.bing.com/th/id/R.b9d760cd49e6708246787a41de6587e9?rik=iy2epsnOR4W%2fug&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f9800000%2fDamn-cute-cats-cute-kittens-9807010-1600-1200.jpg&ehk=oZGSG5vXlMFjrzWuPOKuVXfOOGR8nJd3Ea3kCJOFZb4%3d&risl=&pid=ImgRaw&r=0',
        rentedFrom: "Adrian Mysiak",
        rentDate: "11-01-2023",
        returnDate: "23-05-2023",
        isExpire: false

    }
];

export default RentedFrom