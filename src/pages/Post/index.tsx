import { CardHeaderNoticia } from "./components/CardHeaderNoticia";
import { ContainerPost, ContainerPublicacao, ContentPost } from "./styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import ReactMarkdown from "react-markdown";

interface userInfo {
  login: string;
}

interface postInfos {
  created_at: string;
  html_url: string;
  title: string;
  comments: number;
  user: userInfo;
  body: string;
}

export function Post() {
  const { postId } = useParams();
  const [postInfos, setPostInfos] = useState<postInfos>({} as postInfos);

  useEffect(() => {
    api
      .get(`repos/BrunoMeirel3s/Projeto-Estudo-GitHubBlog/issues/${postId}`)
      .then((response) => {
        console.log(response.data);
        setPostInfos(response.data);
      });
  }, []);

  return (
    <ContainerPost>
      <ContentPost>
        <CardHeaderNoticia
          title={postInfos.title}
          login={postInfos.user?.login}
          created_at={postInfos.created_at}
          comments={postInfos.comments}
          html_url={postInfos.html_url}
        />
        <ContainerPublicacao>
          <ReactMarkdown>{postInfos.body}</ReactMarkdown>
        </ContainerPublicacao>
      </ContentPost>
    </ContainerPost>
  );
}
