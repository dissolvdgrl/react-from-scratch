import { PageWrapper } from "./components/PageWrapper.jsx";
import { Container } from "./components/Container.jsx";
import { Header } from "./components/Header.jsx";
import { Search } from "./components/Search.jsx";
import { ShortList } from "./components/ShortList.jsx";
import { PuppiesList } from "./components/PuppiesList.jsx";
import { NewPuppyForm } from "./components/NewPuppyForm.jsx";
import { puppies} from "./data/puppies.js";

export function App() {
  return (
      <PageWrapper>
        <Container>
          <Header />
          <Main />
        </Container>
      </PageWrapper>
    );
}

function Main() {
  return (
      <main>
        {/* Search & Shortlist */}
        <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <ShortList />
        </div>
        <PuppiesList puppies={puppies} />
        <NewPuppyForm />
      </main>
  );
}