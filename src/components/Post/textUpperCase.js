import { checkingText } from "./chekingText";

export function textUpperCase(posts, isState = false) {
  const dataPosts = posts.map((post) => {
    if (isState) {
      const reduction = checkingText(post);
      return {
        userId: post.userId,
        id: post.id,
        title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
        body: reduction.charAt(0).toUpperCase() + reduction.slice(1),
      };
    }
    return {
      userId: post.userId,
      id: post.id,
      title: post.title.charAt(0).toUpperCase() + post.title.slice(1),
      body: post.body.charAt(0).toUpperCase() + post.body.slice(1),
    };
  });
  return dataPosts;
}
