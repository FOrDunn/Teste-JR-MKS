import Footer from "components/Footer";
import NavBar from "components/Header";
import Main from "components/Main";
import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { HomeContainer } from "styles/styles";
import { api } from "services/api";
import Head from "next/head";

interface Data {
  products: Product[];
}

export const Home: NextPage = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const params = { page: 1, rows: 8, sortBy: "id", orderBy: "ASC" };

      const products = (await api.get<Data>("/products", { params })).data
        .products;

      return products;
    },
  });
  return (
    <HomeContainer>
      <Head>
        <title>Home | Loja da MKS sistemas</title>
        <link
          rel="icon"
          href="https://imagens-voitto.s3.amazonaws.com/voitto-icon.png"
        />
      </Head>
      <NavBar />
      <Main isLoading={isLoading} products={data} />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
