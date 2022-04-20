import { Container } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import MuiCarousel from "./MuiCarousel";
import CommentPanel from "./CommentPanel";
export default function HomeBase(props) {
  const { userId = 1 } = props;
  const [posts, setPosts] = useState([]);
  const [state, setState] = useState({
    postid: 0,
    comments: [],
  });
  useEffect(() => {
    loadPostData();
  }, []);

  const handlePostSelected = useCallback(
    async (postid) => {
      const comments = await (
        await fetch(
          "https://jsonplaceholder.typicode.com/posts/" + postid + "/comments"
        )
      ).json();

      // console.log("LoadPostData post=", _posts);
      setState({
        postid,
        comments,
      });
    },
    [posts]
  );
  const loadPostData = useCallback(async () => {
    const _posts = await (
      await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId + "/posts"
      )
    ).json();

    console.log("LoadPostData post=", _posts);
    setPosts(_posts);
  }, []);

  return (
    <Container sx={{ my: 4 }}>
      <MuiCarousel items={posts} handlePostSelected={handlePostSelected} />
      <CommentPanel cards={state.comments} />
    </Container>
  );
}
