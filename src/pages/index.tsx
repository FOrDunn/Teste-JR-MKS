import Footer from "components/Footer";
import NavBar from "components/Header";
import Main from "components/Main";

import { GetStaticProps, NextPage } from "next";
import { api } from "../services/api";
import { HomeContainer } from "styles/styles";

interface Props {
  products: Product[];
}

export const Home: NextPage<Props> = ({ products }) => {
  return (
    <HomeContainer>
      <NavBar />
      <Main products={products} />
      <Footer />
    </HomeContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const params = { page: 1, rows: 8, sortBy: "id", orderBy: "ASC" };

  const products = await (
    await api.get<Props>("/products", { params })
  ).data.products;

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

export default Home;
