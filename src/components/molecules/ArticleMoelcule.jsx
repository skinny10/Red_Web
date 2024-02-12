import React from "react";
import Title from "../atoms/Title";
import TextAtom from "../atoms/TextAtom";


function ArticleMoelcule({content, title}) {
  return (
    <article >
      <Title msn={title}/>
      <TextAtom text={content} />
    </article>
  );
}

export default ArticleMoelcule;