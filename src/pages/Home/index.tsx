import { CardPublicacao } from "./components/CardPublicacao";
import { CardUsuario } from "./components/CardUsuario";
import { SearchContentInput } from "./components/SearchContentInput";
import { ContainerHome, ContainerPublicacoes, ContentHome } from "./styles";
import { api } from "../../services/api";
import { useEffect, useState } from "react";

interface publishGithub {
  title: string;
  id: string;
  number: number;
  updated_at: string;
  body: string;
}

interface userInfos {
  login: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
  avatar_url: string;
}

export function Home() {
  const [searchText, setSearchText] = useState("");
  const [publicacoes, setPublicacoes] = useState<publishGithub[]>([]);
  const [userInfos, setUserInfos] = useState<userInfos>({} as userInfos);

  useEffect(() => {
    api
      .get(`/search/issues?q=repo:BrunoMeirel3s/Projeto-Estudo-GitHubBlog/`)
      .then((response) => {
        setPublicacoes(response.data?.items);
      });

    api.get("https://api.github.com/users/brunomeirel3s").then((response) => {
      setUserInfos(response.data);
    });
  }, []);

  function searchPublish(text: string) {
    setSearchText(text);
  }

  const filteredPublishes = publicacoes.filter((publicacao) =>
    publicacao.title.toUpperCase().includes(searchText.toUpperCase())
  );

  return (
    <ContainerHome>
      <ContentHome>
        <CardUsuario
          login={userInfos.login}
          name={userInfos.name}
          avatar_url={userInfos.avatar_url}
          bio={userInfos.bio}
          company={userInfos.company}
          followers={userInfos.followers}
          html_url={userInfos.html_url}
          key={userInfos.login}
        />
        <SearchContentInput
          searchPublish={searchPublish}
          publishAmout={publicacoes.length}
        />
        <ContainerPublicacoes>
          {searchText.length >= 1 ? (
            <>
              {filteredPublishes.map((publicacao) => {
                return (
                  <CardPublicacao
                    key={publicacao.id}
                    id={publicacao.id}
                    title={publicacao.title}
                    date={publicacao.updated_at}
                    body={publicacao.body}
                    number={publicacao.number}
                  />
                );
              })}
            </>
          ) : (
            <>
              {publicacoes.map((publicacao) => {
                return (
                  <CardPublicacao
                    key={publicacao.id}
                    id={publicacao.id}
                    title={publicacao.title}
                    date={publicacao.updated_at}
                    body={publicacao.body}
                    number={publicacao.number}
                  />
                );
              })}
            </>
          )}
        </ContainerPublicacoes>
      </ContentHome>
    </ContainerHome>
  );
}
