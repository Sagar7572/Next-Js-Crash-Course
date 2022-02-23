import { useRouter } from "next/router"

const article = ({article}) => {
    // const router = useRouter()
    //     const {id} = router.query
    return(
        <div>This is article{article.id}</div>
        
    )
}

export const getServerSideProps = async
(context) => {
    const res = await fetch (
        `https://jsonplaceholder.typicodde.com/posts/${context.params.id}`)

    const article = await res.json()
    return{
        props : {
            article
        }
    }
}
export default article;