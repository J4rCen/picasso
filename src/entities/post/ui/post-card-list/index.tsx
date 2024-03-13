import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PostCard } from "../post-card";
import { useGetPostsQuery } from "../../model";
import { postProps } from "../../interface";
import "./style.scss"

function PostsCardList() {
  const [postStart, setPostStart] = useState(0);
  const { data = [] } = useGetPostsQuery({
    start: postStart,
  });

  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: 0.5,
  });

  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => prev > 0 ? prev - 1 : prev);
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev) => prev + 1);
    }
  }, [inViewLastCard]);

  return (
    <div>
      <ul className="post-list">
        {data.map((post: postProps, index: number, arr: Array<postProps>) => (
          index === 0 ? (
            <li key={post.id} ref={firstCard}>
              <PostCard post={post} />
            </li>
          ) : index === arr.length - 1 ? (
            <li key={post.id} ref={lastCard}>
              <PostCard post={post} />
            </li>
          ) : (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          )
        ))}
      </ul>
    </div>
  );
}

export default PostsCardList;
