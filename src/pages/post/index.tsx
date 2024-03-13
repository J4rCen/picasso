import { useNavigate, useParams } from "react-router-dom";
import Button from "../../shared/ui/button";
import { useGetPostByIdQuery } from "../../entities/post/model";

function PostPage() {
  const { id } = useParams();
  const { data: post, isSuccess, isLoading } = useGetPostByIdQuery(id);
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(-1);
  };

  if (isLoading) return <h1>Loading...</h1>;
  if (!isSuccess) return <h1>Страница не существует</h1>;

  return (
    <main className="container">
      <h1 className="post_id">№ {post.id}</h1>
      <h2 className="title">{post.title}</h2>
      <p>{post.body}</p>
      <Button onClick={buttonHandler}>Назад</Button>
    </main>
  );
}

export default PostPage;
