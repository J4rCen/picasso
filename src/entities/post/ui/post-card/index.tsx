import { useNavigate } from "react-router-dom";
import Button from "../../../../shared/ui/button";
import { postObjectProps } from "../../interface";

export const PostCard = ({ post }: postObjectProps) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate(`${post.id}`);
  }

  return (
    <div className="container">
      <h2 className="post_id" >№ {post.id}</h2>
      <h3 className="title">{post.title}</h3>
      <p>
        {post.body.length > 50 ? post.body.substring(0, 50) + "..." : post.body}
      </p>
      <Button onClick={buttonHandler}>
        Просмотр
      </Button>
    </div>
  );
};
