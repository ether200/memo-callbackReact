import React from "react";
import getPost from "./helpers/getPost";

const Card = () => {
  const [post, setPost] = React.useState({ title: "post1" });
  const [loading, setLoading] = React.useState(true);
  const isMountedRef = React.useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      if (isMountedRef.current) {
        setPost(newPost);
        setLoading(false);
      }
    });
  };

  React.useEffect(() => {
    updatePost();
    // cada vez que el componente se desmonte
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h2>{post.title}</h2>
    </div>
  );
};

export default Card;
